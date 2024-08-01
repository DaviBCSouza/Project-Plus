import { PrismaClient, Project } from "@prisma/client";

import {
  CreateProjectDTO,
  ProjectDTO,
  UpdateProjectDTO,
} from "./project.types";

const prisma = new PrismaClient();

export const getById = async (id: string): Promise<ProjectDTO | null> => {
  return await prisma.project.findUnique({
    where: { id },
  });
};

export const getAll = async (): Promise<ProjectDTO[] | null> => {
  return await prisma.project.findMany();
};

export const getByIdUser = async (
  idUser: string
): Promise<ProjectDTO[] | null> => {
  return await prisma.project.findMany({
    where: { idUser },
  });
};

export const createProject = async (
  newProject: CreateProjectDTO
): Promise<Project> => {
  return await prisma.project.create({
    data: { ...newProject },
  });
};

export const updateProject = async (
  id: string,
  project: UpdateProjectDTO
): Promise<ProjectDTO> => {
  return await prisma.project.update({
    where: { id },
    data: { ...project },
  });
};

export const deleteProject = async (id: string): Promise<ProjectDTO | null> => {
  return await prisma.project.delete({
    where: { id },
  });
};
