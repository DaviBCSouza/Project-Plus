import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { criarUsuario } from "../usuario/usuario.service";
import { verificarCredenciais } from "./auth.services";

const signup = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Cadastrar um novo usuário'
    #swagger.description = 'Endpoint para cadastrar um novo usuário'

    #swagger.parameters['novoUsuario'] = { 
      description: 'Informações do novo usuário', 
      in: 'body', 
      required: true, 
      type: 'object', 
      schema: { $ref: "#/definitions/Signup" }
    }

    #swagger.responses[201] = {description: 'Usuário criado com sucesso'}
    #swagger.responses[400] = {description: 'Erro ao criar usuário'}
   */

  try {
    const usuario = await criarUsuario(req.body);
    return res.status(StatusCodes.CREATED).json(usuario);
  } catch (erro) {
    return res.status(StatusCodes.BAD_REQUEST).json(erro);
  }
};

const login = async (req: Request, res: Response) => {
  /* 
    #swagger.summary = 'Autenticar um usuário'
    #swagger.description = 'Endpoint para autenticar um usuário'

    #swagger.parameters['credenciais'] = { 
      description: 'Credenciais do usuário', 
      in: 'body', 
      required: true, 
      type: 'object', 
      schema: { $ref: "#/definitions/Login" }
    }

    #swagger.responses[200] = {description: 'Usuário autenticado'}
    #swagger.responses[401] = {description: 'Credenciais inválidas'}
    #swagger.responses[500] = {description: 'Erro no servidor'}
   */

  const credentials = req.body;
  try {
    const usuario = await verificarCredenciais(credentials);
    if (!usuario)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json(StatusCodes.UNAUTHORIZED);

    req.session.uid = usuario.id;
    res.status(StatusCodes.OK).json(usuario);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const logout = async (req: Request, res: Response) => {
  /* 
    #swagger.summary = 'Deslogar um usuário'
    #swagger.description = 'Endpoint para deslogar um usuário'

    #swagger.parameters['uid'] = { 
      description: 'ID do usuário', 
      in: 'session',
      required: true 
    }

    #swagger.responses[200] = {description: 'Usuário deslogado'}
    #swagger.responses[401] = {description: 'Usuário não autenticado'}
   */

  if (req.session.uid) {
    req.session.destroy(() => {
      res.status(StatusCodes.OK).json(ReasonPhrases.OK);
    });
  } else {
    res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
  }
};

export default { signup, login, logout };
