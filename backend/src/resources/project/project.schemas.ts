import Joi from "joi";

export const projectPostSchema = Joi.object({
  title: Joi.string().required().max(100),
  location: Joi.string().required().max(100),
  createdBy: Joi.string().required(),
  date: Joi.date(),
  idUser: Joi.string().required().max(36),
});

export const projectPutSchema = Joi.object({
  title: Joi.string().required().max(100),
  location: Joi.string().required().max(100),
  createdBy: Joi.string().required(),
  date: Joi.date(),
  idUser: Joi.string().required().max(36),
});
