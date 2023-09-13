import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import sendMail from "./sendMail.js";
import Admins from "../models/Admins.js";
import { AdminSignupData } from "../types/admin.js";
import { adminSignupInputSchema } from "../validation/admin.js";

export const handleAdminSignup = async (req: Request, res: Response) => {
  const bodyData: AdminSignupData = req.body;

  const isValidInput = adminSignupInputSchema.safeParse(bodyData);

  if (!isValidInput.success) {
    res.status(400).json({
      message: isValidInput.error.issues[0].message,
      error: isValidInput.error,
    });
    return;
  }

  const { name, email, password } = isValidInput.data;

  try {
    const admin = await Admins.findOne({ email });

    if (admin) {
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

    const newAdmin = new Admins({
      name,
      email,
      password: encrypted_Pswd,
      OTP: OTP_token,
      OTP_Attempt: 1,
    });
    await newAdmin.save();

    const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_AUTH_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "Signed successfully", authToken: token });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error during admin signup" });
    console.log(err);
  }
};
