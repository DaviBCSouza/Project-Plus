import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { v4 as uuidv4 } from "uuid";

import cors from "cors";
import session from "express-session";
import router from "./router";
import swaggerFile from "./swagger/swagger-output.json";
import validateEnv from "./utils/validateEnv";

declare module "express-session" {
  interface SessionData {
    uid: string;
  }
}

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 5000;

// Configuração do CORS
const corsOptions = {
  origin: "http://localhost:1200",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
  session({
    genid: () => uuidv4(),
    secret: "StMf#She#mj34se#dSm",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
    },
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando em https://localhost:${PORT}`);
});
