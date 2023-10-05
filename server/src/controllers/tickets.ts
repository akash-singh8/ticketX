import { Request, Response } from "express";
import Users from "../models/Users";
import Admins from "../models/Admins";
import Tickets from "../models/Tickets";
import ticketSchema from "../validation/ticket";

export const getUser = async (req: Request, res: Response) => {
  const user: {
    id: string;
    role: string;
  } = req.body.user;

  try {
    let userData;
    if (user.role === "admin") {
      userData = await Admins.findById(user.id).populate("ticketResolved");
      if(userData){
        userData = { ...userData.toObject(), role: "admin" };
      }

    } else {
      userData = await Users.findById(user.id).populate("ticketRaised");
      if(userData){
        userData = { ...userData.toObject(), role: "client" };
      }
    }
  
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userData);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error while getting user details" });
    console.log(err);
  }
};

export const raiseTicket = async (req: Request, res: Response) => {
  try {
    const isValidTicket = ticketSchema.safeParse(req.body.ticket);

    if (!isValidTicket.success) {
      return res.status(400).json({
        message: isValidTicket.error.issues[0].message,
        error: isValidTicket.error,
      });
    }

    const user: {
      id: string;
      name: string;
      email: string;
    } = req.body.user;

    const ticket = {
      ...isValidTicket.data,
      dateRaised: new Date().toDateString(),
      status: "pending",
      raisedBy: {
        name: user.name,
        email: user.email,
      },
    };

    const newTicket = new Tickets(ticket);
    await newTicket.save();

    await Users.updateOne(
      { _id: user.id },
      { $push: { ticketRaised: newTicket.id } }
    );

    res.status(201).json({ message: "successfully raised ticket" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error while raising Ticket" });
    console.log(err);
  }
};

// admin specific routes
export const getTickets = async (req: Request, res: Response) => {
  const userRole = req.body.user?.role;
  const ticketStatus= req.query.ticketStatus;
  if (!userRole || userRole !== "admin") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  if (
    ticketStatus !== "pending" &&
    ticketStatus !== "inreview" &&
    ticketStatus !== "resolved"
  ) {
    return res.status(400).json({ message: "Invalid ticketStatus" });
  }

  try {
    const tickets = await Tickets.find({ status: ticketStatus });

    res.json({ tickets });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error while fetching tickets" });
    console.log(err);
  }
};

export const updateTicketStatus = async (req: Request, res: Response) => {
  const user = req.body.user;

  if (!user?.role || user.role !== "admin") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  const ticket: { id: string; status: string } = req.body.ticket;
  if (ticket.status !== "inreview" && ticket.status !== "resolved") {
    return res.status(400).json({ message: "Invalid ticketStatus" });
  }

  try {
    await Tickets.updateOne({ _id: ticket.id }, { status: ticket.status });

    if (ticket.status === "resolved") {
      await Admins.updateOne(
        { _id: user.id },
        { $push: { ticketResolved: ticket.id } }
      );
    }

    res.status(200).json({ message: "Successfully updated ticket status" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error while ticket status update" });
    console.log(err);
  }
};
