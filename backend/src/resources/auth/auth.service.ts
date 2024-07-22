import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

import { UserDTO } from "../user/user.types";
import { LoginDTO } from "./auth.types";

const prisma = new PrismaClient();

const checkCredentials = async (login: LoginDTO): Promise<UserDTO | null> => {
  const user = await prisma.user.findUnique({
    where: { email: login.email },
  });

  if (!user) return null;
  if (user.status !== "ATIVO") return null;

  const incorrectPass = await compare(login.password, user.password);

  if (!incorrectPass) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    status: user.status,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

export { checkCredentials };
