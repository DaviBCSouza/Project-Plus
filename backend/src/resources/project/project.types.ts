import { Project } from "@prisma/client";

type CreateProjectDTO = Omit<Project, "id">;

type UpdateProjectDTO = Partial<CreateProjectDTO>;

type DeleteProjectDTO = Pick<Project, "id">;

type ProjectDTO = Partial<CreateProjectDTO>;

export { CreateProjectDTO, DeleteProjectDTO, ProjectDTO, UpdateProjectDTO };
