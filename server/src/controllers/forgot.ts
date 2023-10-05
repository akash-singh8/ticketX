import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Users from "../models/Users";
import sendMail from "./sendMail";
import validateEmail from "../validation/email";
import Admins from "../models/Admins";

export const handleForgotPassword = async (req: Request, res: Response) => {
  const isValidEmail = validateEmail.safeParse(req.body);

  if (!isValidEmail.success) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const email = isValidEmail.data.email;
  const role = email.endsWith("@i-her.org") ? "admin" : "user";

  try {
    let user;

    if (role === "admin") user = await Admins.findOne({ email });
    else user = await Users.findOne({ email });

    if (!user) {
      return res.status(403).json({ message: "User not found!" });
    }

    const OTP = Math.floor(100000 + Math.random() * 900000);
    await sendMail(email, OTP);

    const OTP_token = jwt.sign({ OTP: OTP }, process.env.JWT_OTP_SECRET!, {
      expiresIn: "5m",
    });

    await (role === "admin" ? Admins : Users).updateOne(
      { _id: user._id },
      { OTP: OTP_token, $inc: { OTP_Attempt: 1 } }
    );
    await sendMail(email, OTP);

    const token = jwt.sign(
      { id: user.id, role: role },
      process.env.JWT_AUTH_SECRET!,
      {
        expiresIn: "1h",
      }
    );

    res
      .status(200)
      .json({ message: "successfully send new OTP", authToken: token });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error on forgot password" });
    console.log(err);
  }
};
