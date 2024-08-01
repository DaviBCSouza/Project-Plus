import { Router } from "express";

import { validateBody } from "../../middlewares/validateBody";
import projectController from "./project.controller";
import { projectPostSchema, projectPutSchema } from "./project.schemas";

const router = Router();

router.get("/", projectController.fetchAll);
router.get("/:id", projectController.fetchById);
router.get("/user/:id", projectController.fetchByIdUser);
router.post("/", validateBody(projectPostSchema), projectController.create);
router.put("/:id", validateBody(projectPutSchema), projectController.update);
router.delete("/:id", projectController.remove);

export default router;
