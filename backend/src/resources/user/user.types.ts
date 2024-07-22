import { User } from "@prisma/client";

type CreateUserDTO = Pick<User, "name" | "email" | "password" | "status">;

type UpdateUserDTO = Partial<CreateUserDTO>;

type UserDTO = Omit<User, "password">;

export { CreateUserDTO, UpdateUserDTO, UserDTO };
