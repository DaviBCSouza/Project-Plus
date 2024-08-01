import { Router } from "express";
import authRouter from "../resources/auth/auth.router";
import projectRouter from "../resources/project/project.router";
import userRouter from "../resources/user/user.router";

const router = Router();

router.use(
  "/auth",
  // #swagger.tags = ["Auth"]
  authRouter
);

router.use(
  "/user",
  // #swagger.tags = ["Usuario"]
  userRouter
);

router.use(
  "/project",
  // #swagger.tags = ["Projeto"]
  projectRouter
);

export default router;
