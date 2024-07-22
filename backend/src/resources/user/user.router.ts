import { Router } from "express";
import { validateBody } from "../../middlewares/validateBody";
import userController from "./user.controller";
import { userPost, userPut } from "./user.schemas";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", validateBody(userPost), userController.create);
router.put("/:id", validateBody(userPut), userController.update);
router.delete("/:id", userController.remove);

export default router;
