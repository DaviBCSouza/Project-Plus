import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcryptjs";

import { CreateUserDTO, UpdateUserDTO, UserDTO } from "./user.types";

const prisma = new PrismaClient();

const userFields = {
  id: true,
  name: true,
  email: true,
  status: true,
  createdAt: true,
  updatedAt: true,
};

// definindo metodos que resgatam dados do banco de dados
const findUserById = async (id: string): Promise<UserDTO | null> => {
  return await prisma.user.findUnique({
    where: {
      id,
      status: {
        not: "INATIVO",
      },
    },
    select: userFields,
  });
};

const findAllUsers = async (): Promise<UserDTO[]> => {
  return await prisma.user.findMany({
    where: {
      status: {
        not: "INATIVO",
      },
    },
    select: userFields,
  });
};

// definindo metodos que alteram dados no banco de dados
const createUser = async (user: CreateUserDTO): Promise<UserDTO> => {
  // encriptando a senha
  const rounds = parseInt(process.env.BCRYPT_ROUNDS!);
  const salt = await genSalt(rounds);
  const password = await hash(user.password, salt);

  // criando o usuario
  return await prisma.user.create({
    select: userFields,
    data: { ...user, password },
  });
};

const updateUser = async (
  id: string,
  usuario: UpdateUserDTO
): Promise<UserDTO | null> => {
  return await prisma.user.update({
    where: { id },
    select: userFields,
    data: usuario,
  });
};

const deleteUser = async (id: string): Promise<UserDTO | null> => {
  return await prisma.user.update({
    where: { id },
    select: userFields,
    data: { status: "INATIVO" },
  });
};

export { createUser, deleteUser, findAllUsers, findUserById, updateUser };
