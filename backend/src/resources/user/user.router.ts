import { Router } from "express";
import usuarioController from "./user.controller";

const router = Router();

router.get("/", usuarioController.getAll);
router.get("/:id", usuarioController.getById);
router.post("/", usuarioController.create);
router.put("/:id", usuarioController.update);
router.delete("/:id", usuarioController.deleteUser);

export default router;
