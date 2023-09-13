import { Router } from "express";
import { handleUserLogin, handleUserSignup } from "../controllers/users";
import { handleAdminLogin, handleAdminSignup } from "../controllers/admins";

const AuthRouter = Router();

AuthRouter.post("/signup", (req, res) => {
  const { role } = req.query;

  if (role === "user") handleUserSignup(req, res);
  else if (role === "admin") handleAdminSignup(req, res);

  res.status(404).json({ message: "Role is not defined" });
});

AuthRouter.post("/login", (req, res) => {
  const { role } = req.query;

  if (role === "user") handleUserLogin(req, res);
  else if (role === "admin") handleAdminLogin(req, res);

  res.status(404).json({ message: "Role is not defined" });
});

export default AuthRouter;
