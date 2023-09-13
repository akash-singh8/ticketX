import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Users from "../models/Users.js";
import sendMail from "./sendMail.js";

export const handleUserSignup = async (req: Request, res: Response) => {
  const { name, email, password, location } = req.body;

  try {
    const user = await Users.findOne({ email });

    if (user) {
      res.status(409).json({ message: "Email address is already in use." });
      return;
    }

    if (!process.env.JWT_OTP_SECRET || !process.env.JWT_AUTH_SECRET) {
      throw new Error("JWT_SECRET environment variable is not defined.");
    }

    const OTP = Math.floor(Math.random() * 999999);
    await sendMail(email, OTP);

    const OTP_token = jwt.sign({ OTP: OTP }, process.env.JWT_OTP_SECRET, {
      expiresIn: "5m",
    });
    const encrypted_Pswd = await bcrypt.hash(password, 11);

    const newUser = new Users({
      name,
      email,
      password: encrypted_Pswd,
      location: location,
      OTP: OTP_token,
      OTP_Attempt: 1,
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_AUTH_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "Signed successfully", authToken: token });
  } catch (err) {
    res.status(500).json({ message: "Internal server error during user signup" });
    console.log(err);
  }
};
