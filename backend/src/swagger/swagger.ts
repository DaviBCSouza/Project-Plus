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
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
};
const outputFile = "./swagger-output.json";
const routes = ["./src/router/index.ts"];

swaggerAutogen()(outputFile, routes, doc);
