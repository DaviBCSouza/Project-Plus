import { User } from "@prisma/client";

type LoginDTO = Pick<User, "email" | "name">;

export { LoginDTO };
