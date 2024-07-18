import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

import { UsuarioDTO } from "../usuario/usuario.types";
import { LoginDTO } from "./auth.types";

const prisma = new PrismaClient();

const verificarCredenciais = async (
  login: LoginDTO
): Promise<UsuarioDTO | null> => {
  const usuario = await prisma.usuario.findUnique({
    where: { email: login.email },
  });

  if (!usuario) return null;
  if (usuario.status !== "ATIVO") return null;

  const senhaCorreta = await compare(login.senha, usuario.senha);

  if (!senhaCorreta) return null;

  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    dataNasc: usuario.dataNasc,
    cpf: usuario.cpf,
    fotoPerfil: usuario.fotoPerfil,
    status: usuario.status,
    criadoEm: usuario.criadoEm,
    atualizadoEm: usuario.atualizadoEm,
    razaoExclusao: usuario.razaoExclusao,
    apagadoEm: usuario.apagadoEm,
  };
};

export { verificarCredenciais };
