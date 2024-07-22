import { User } from "@prisma/client";

type LoginDTO = Pick<User, "email" | "password">;

export { LoginDTO };
