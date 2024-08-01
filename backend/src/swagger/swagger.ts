import dotenv from "dotenv";
import swaggerAutogen from "swagger-autogen";

dotenv.config();

const doc = {
  info: {
    title: "API do Sistema Project +",
    description: "Documentação da API",
  },
  definitions: {
    Signup: {
      name: "usuario",
      email: "usuario@gmail.com",
      password: "123456",
      status: "ATIVO",
    },
    Login: {
      email: "usuario@gmail.com",
      password: "123456",
    },
    CriarUsuarioDTO: {
      nome: "usuario exemplo",
      email: "usuarioExemplo@gmail.com",
      password: "123456",
      status: "ATIVO",
    },
    AtualizarUsuarioDTO: {
      nome: "usuario exemplo editado",
      email: "usuarioEditado@gmail.com",
      password: "654321",
      status: "ATIVO",
    },
    ProjetoDTO: {
      title: "Título do Projeto",
      location: "Descrição do Projeto",
      createdBy: "Criador do Projeto",
      date: "2024-03-03T18:35:15.621Z",
      idUser: "ID do Usuário Responsável pelo Projeto",
    },
    CriarProjetoDTO: {
      title: "Título do Projeto",
      location: "Descrição do Projeto",
      createdBy: "Criador do Projeto",
      date: "2024-03-03T18:35:15.621Z",
      idUser: "ID do Usuário Responsável pelo Projeto",
    },
    AtualizarProjetoDTO: {
      title: "Título do Projeto",
      location: "Descrição do Projeto",
      createdBy: "Criador do Projeto",
      date: "2024-03-03T18:35:15.621Z",
      idUser: "Id do Usuário Responsável pelo Projeto",
    },
    DeletarProjetoDTO: {
      id: "Id do Projeto a Excluir",
    },
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
};
const outputFile = "./swagger-output.json";
const routes = ["./src/router/index.ts"];

swaggerAutogen()(outputFile, routes, doc);
