import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcryptjs";

import {
  CriarUsuarioDTO,
  AtualizarUsuarioDTO,
  DeletarUsuarioDTO,
  UsuarioDTO,
} from "./user.types";

const prisma = new PrismaClient();

const camposUsuario = {
  id: true,
  nome: true,
  email: true,
  status: true,
  criadoEm: true,
  atualizadoEm: true,
  razaoExclusao: true,
  apagadoEm: true,
};

// definindo metodos que resgatam dados do banco de dados
const obterUsuarioPorId = async (id: string): Promise<UsuarioDTO | null> => {
  return await prisma.user.findUnique({
    where: {
      id,
      status: {
        not: "INATIVO",
      },
    },
    select: camposUsuario,
  });
};

const obterUsuarios = async (): Promise<UsuarioDTO[]> => {
  return await prisma.user.findMany({
    where: {
      status: {
        not: "INATIVO",
      },
    },
    select: camposUsuario,
  });
};

// definindo metodos que alteram dados no banco de dados
const criarUsuario = async (usuario: CriarUsuarioDTO): Promise<UsuarioDTO> => {
  // encriptando a senha
  const rounds = parseInt(process.env.BCRYPT_ROUNDS!);
  const salt = await genSalt(rounds);
  const senha = await hash(usuario.senha, salt);

  // criando o usuario
  return await prisma.user.create({
    select: camposUsuario,
    data: { ...usuario, senha },
  });
};

const atualizarUsuario = async (
  id: string,
  usuario: AtualizarUsuarioDTO
): Promise<UsuarioDTO | null> => {
  return await prisma.user.update({
    where: { id },
    select: camposUsuario,
    data: usuario,
  });
};

const deletarUsuario = async (
  id: string,
  razaoExclusao: string
): Promise<UsuarioDTO | null> => {
  return await prisma.user.update({
    where: { id },
    select: camposUsuario,
    data: { status: "INATIVO", razaoExclusao, apagadoEm: new Date() },
  });
};

export {
  obterUsuarioPorId,
  obterUsuarios,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
};
