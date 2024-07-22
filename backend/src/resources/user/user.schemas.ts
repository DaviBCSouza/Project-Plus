import Joi from "joi";

export const userPost = Joi.object({
  name: Joi.string().required().max(100),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(64),
  status: Joi.string().valid("ATIVO", "INATIVO").required(),
});

export const userPut = Joi.object({
  name: Joi.string().max(100),
  email: Joi.string().email().max(100),
  password: Joi.string().max(64),
  status: Joi.string().valid("ATIVO", "INATIVO"),
});
