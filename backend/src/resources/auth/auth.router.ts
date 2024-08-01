import { Router } from "express";
import { isAuth } from "../../middlewares/isAuth";
import authController from "./auth.controller";

const router = Router();

router.post("/signup", authController.signup);
router.put("/login", authController.login);
router.delete("/logout", isAuth, authController.logout);

export default router;
