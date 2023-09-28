import { Request, Response } from "express";
import Users from "../models/Users";
import Admins from "../models/Admins";

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
