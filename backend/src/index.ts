import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";

import router from "./router";
import swaggerFile from "./swagger/swagger-output.json";
import validateEnv from "./utils/validateEnv";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(express.json());
app.use(router);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
  console.log(`Servidor rodando em https://localhost:${PORT}`);
});
