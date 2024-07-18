import { User } from "@prisma/client";

type CriarUsuarioDTO = Pick<
User,
  "name" | "email" | "senha"
>;

type AtualizarUsuarioDTO = Partial<CriarUsuarioDTO>;

type UsuarioDTO = Omit<User, "senha">;

export { CriarUsuarioDTO, AtualizarUsuarioDTO, DeletarUsuarioDTO, UsuarioDTO };
