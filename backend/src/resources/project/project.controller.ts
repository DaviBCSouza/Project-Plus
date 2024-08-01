import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  createProject,
  deleteProject,
  getAll,
  getById,
  getByIdUser,
  updateProject,
} from "./project.service";

const create = async (req: Request, res: Response) => {
  /**
    #swagger.summary = 'Cria um novo projeto.'
    #swagger.description = 'Endpoint para adicionar um novo projeto no sistema.'
    #swagger.parameters['body'] = {
            in: 'body',
            description: 'Dados do projeto',
            required: true,
            schema: { $ref: '#/definitions/CriarProjetoDTO' }
    }
    #swagger.responses[201] = {description: 'projeto criado'}
    #swagger.responses[400] = {description: 'Requisição inválida'}
    #swagger.responses[422] = {description: 'Objeto inválido: não processável'}
    #swagger.responses[500] = {description: 'Erro ao criar projeto'}

*/
  try {
    const project = await createProject(req.body);
    res.status(StatusCodes.CREATED).json(project);
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const fetchById = async (req: Request, res: Response) => {
  /**
        #swagger.summary = 'Obtém uma projeto pelo ID'
        #swagger.description = 'Endpoint para obter um projeto específico pelo seu ID'
        #swagger.parameters['id'] = {
            description: 'ID do projeto',
            in: 'path',
            required: true
        }
        #swagger.responses[200] = {description: 'Projeto obtido com sucesso'}
        #swagger.responses[500] = {description: 'Erro ao obter projeto'}
     */
  try {
    const { id } = req.params;
    const project = await getById(id);
    res.status(StatusCodes.OK).json(project);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const fetchByIdUser = async (req: Request, res: Response) => {
  /*
        #swagger.summary = 'Obtém projeto pelo ID do usuário'
        #swagger.description = 'Endpoint para obter todas os projetos de um usuário específico pelo seu ID'

        #swagger.parameters['id'] = {
            description: 'ID do usuário',
            in: 'path',
            required: true
        }

        #swagger.responses[200] = {description: 'projetos obtidos com sucesso'}
        #swagger.responses[500] = {description: 'Erro ao obter projeto'}
    */
  try {
    const { idUser } = req.params;
    const projects = await getByIdUser(idUser);
    res.status(StatusCodes.OK).json(projects);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const fetchAll = async (req: Request, res: Response) => {
  /*
        #swagger.summary = 'Obtém todos os projetos'
        #swagger.description = 'Endpoint para obter todos os projetos cadastrados no sistema'

        #swagger.responses[200] = {description: 'Projetos obtidos com sucesso'}
        #swagger.responses[500] = {description: 'Erro ao obter projeto'}
    */
  try {
    const projects = await getAll();
    res.status(StatusCodes.OK).json(projects);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const update = async (req: Request, res: Response) => {
  /**
        #swagger.summary = 'Atualiza um projeto existente'
        #swagger.description = 'Endpoint para atualizar um projeto existente'

        #swagger.parameters['id'] = {
            description: 'ID do projeto a ser atualizado',
            in: 'path',
            required: true
        }
        #swagger.responses[200] = {description: 'projeto atualizada com sucesso'}
        #swagger.responses[400] = {description: 'Requisição inválida'}
        #swagger.responses[422] = {description: 'Objeto inválido: não processável'}
        #swagger.responses[500] = {description: 'Erro ao atualizar projeto'}

     */
  try {
    const { id } = req.params;
    const project = await updateProject(id, req.body);
    res.status(StatusCodes.OK).json(project);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

const remove = async (req: Request, res: Response) => {
  /*
        #swagger.summary = 'Deleta um projeto existente'
        #swagger.description = 'Endpoint para deletar um projeto pelo seu ID'

        #swagger.parameters['id'] = {
            description: 'ID do projeto a ser deletada',
            in: 'path',
            required: true
        }

        #swagger.responses[200] = {description: 'Projeto deletado com sucesso'}
        #swagger.responses[500] = {description: 'Erro ao deletar projeto'}
    */
  try {
    const { id } = req.params;
    const project = await deleteProject(id);
    res.status(StatusCodes.OK).json(project);
  } catch (erro) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(erro);
  }
};

export default {
  fetchById,
  fetchByIdUser,
  fetchAll,
  create,
  update,
  remove,
};
