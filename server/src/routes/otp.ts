import { Router } from "express";
import { authenticateJWT } from "../middlewares/authJWT";
import { validateStats } from "../middlewares/authStats";
import { resendOTP, verifyOTP } from "../controllers/otpOperation";

const otpRouter = Router();

otpRouter.patch("/resend", authenticateJWT, validateStats, resendOTP);

otpRouter.patch("/verify", authenticateJWT, validateStats, verifyOTP);

export default otpRouter;
