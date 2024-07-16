import { cleanEnv, port, str } from "envalid";

// Função para validar o arquivo .env
function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    HOST: str(),
    NODE_ENV: str(),
    DB_PASSWORD: str(),
    DATABASE_URL: str(),
  });
}

export default validateEnv;
