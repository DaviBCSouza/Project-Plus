import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import {
  createUser,
  deleteUser,
  findAllUsers,
  findUserById,
  updateUser,
} from "./user.service";

// definindo metodos que resgatam dados do banco de dados
const getById = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Buscar um usuário pelo ID'
    #swagger.description = 'Endpoint para buscar um usuário pelo ID'

    #swagger.parameters['id'] = { 
      description: 'ID do usuário', 
      in: 'path', 
      required: true, 
      type: 'string' 
    }

    #swagger.responses[200] = {description: 'Usuário encontrado'}
    #swagger.responses[500] = {description: 'Erro no servidor'}
   */

  try {
    const { id } = req.params;
    const user = await findUserById(id);
    res.status(StatusCodes.OK).json(user);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const getAll = async (_: Request, res: Response) => {
  /*
    #swagger.summary = 'Buscar todos os usuários'
    #swagger.description = 'Endpoint para buscar todos os usuários'

    #swagger.responses[200] = {description: 'Usuários encontrados'}
    #swagger.responses[500] = {description: 'Erro no servidor'}
   */

  try {
    const users = await findAllUsers();
    res.status(StatusCodes.OK).json(users);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

// definindo metodos que alteram dados no banco de dados
const create = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Criar um usuário'
    #swagger.description = 'Endpoint para criar um usuário'

    #swagger.parameters['usuario'] = { 
      description: 'Informações do usuário', 
      in: 'body', 
      required: true, 
      type: 'object', 
      schema: { $ref: "#/definitions/CriarUsuarioDTO" }
    }

    #swagger.responses[201] = {description: 'Usuário criado'}
    #swagger.responses[500] = {description: 'Erro no servidor'}
   */

  try {
    const user = await createUser(req.body);
    res.status(StatusCodes.CREATED).json(user);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const update = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Atualizar um usuário'
    #swagger.description = 'Endpoint para atualizar um usuário'

    #swagger.parameters['id'] = { 
      description: 'ID do usuário', 
      in: 'path', 
      required: true, 
      type: 'string' 
    }

    #swagger.parameters['usuario'] = { 
      description: 'Informações do usuário', 
      in: 'body', 
      required: true, 
      type: 'object', 
      schema: { $ref: "#/definitions/AtualizarUsuarioDTO" }
    }

    #swagger.responses[200] = {description: 'Usuário atualizado'}
    #swagger.responses[500] = {description: 'Erro no servidor'}
    */

  try {
    const { id } = req.params;
    const user = await updateUser(id, req.body);
    res.status(StatusCodes.OK).json(user);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const remove = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Deletar um usuário'
    #swagger.description = 'Endpoint para deletar um usuário'

    #swagger.parameters['id'] = { 
      description: 'ID do usuário', 
      in: 'path', 
      required: true, 
      type: 'string' 
    }

    #swagger.parameters['razaoExclusao'] = { 
      description: 'Razão da exclusão', 
      in: 'body', 
      required: true, 
      type: 'object', 
      schema: { $ref: "#/definitions/DeletarUsuarioDTO" }
    }

    #swagger.responses[200] = {description: 'Usuário deletado'}
    #swagger.responses[500] = {description: 'Erro no servidor'}
   */

  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.status(StatusCodes.OK).json(user);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

export default {
  getById,
  getAll,
  create,
  update,
  remove,
};
