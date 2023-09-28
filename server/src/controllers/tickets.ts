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
    } else {
      userData = await Users.findById(user.id).populate("ticketRaised");
    }

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userData);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error while getting tickets" });
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

    const newTicket = new Tickets(isValidTicket.data);
    await newTicket.save();

    res.status(201).json({ message: "successfully raised ticket" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error while raising Ticket" });
    console.log(err);
  }
};
