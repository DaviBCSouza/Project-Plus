import dotenv from "dotenv";
import swaggerAutogen from "swagger-autogen";

dotenv.config();

const doc = {
  info: {
    title: "API do Sistema Project +",
    description: "Documentação da API",
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
};
const outputFile = "./swagger-output.json";
const routes = ["./src/router/index.ts"];

swaggerAutogen()(outputFile, routes, doc);
