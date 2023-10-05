import { Router } from "express";
import { handleForgotPassword } from "../controllers/forgot";

const queryRouter = Router();

queryRouter.post("/forgot-password", handleForgotPassword);

export default queryRouter;
