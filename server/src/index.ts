import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRouter from "./routes/auth";
import otpRouter from "./routes/otp";
import { authenticateJWT } from "./middlewares/authJWT";
import { validateStats } from "./middlewares/authStats";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/auth", AuthRouter);
app.use("/otp", authenticateJWT, validateStats, otpRouter);

const mongodb_uri = process.env.MONGODB_URI;

if (!mongodb_uri) {
  console.error("MONGODB_URI environment variable is not defined.");
} else {
  mongoose.connect(mongodb_uri, { dbName: "ticketPortal" });

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("MongoDB connected");

    const PORT: number = parseInt(process.env.PORT || "3000", 10);

    app.listen(PORT, () => {
      console.log("Server listening on port:", PORT);
    });
  });

  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });
}
