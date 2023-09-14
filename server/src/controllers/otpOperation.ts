import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Users from "../models/Users";
import Admins from "../models/Admins";
import sendMail from "./sendMail";

export const resendOTP = async (req: Request, res: Response) => {
  const user: { id: string; role: string; email: string } = req.body.user;

  try {
    if (!process.env.JWT_OTP_SECRET)
      throw new Error("JWT_OTP_SECRET environment variable is not defined.");

    const new_OTP = Math.floor(Math.random() * 999999);
    const encrypted_OTP = jwt.sign(
      { OTP: new_OTP },
      process.env.JWT_OTP_SECRET,
      {
        expiresIn: "5m",
      }
    );

    await sendMail(user.email, new_OTP);

    const currentUser = user.role === "admin" ? Admins : Users;
    await currentUser.updateOne(
      { _id: user.id },
      { OTP: encrypted_OTP, $inc: { OTP_Attempt: 1 } }
    );

    res.status(201).json({ message: `OTP resend to ${user.email}` });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error while resending OTP" });
    console.log(err);
  }
};
