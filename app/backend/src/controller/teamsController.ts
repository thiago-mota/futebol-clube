import { Request, Response } from 'express';
import teamsService from '../service/teamsService';

const getAllTeams = async (_request: Request, response: Response) => {
  const allTeams = await teamsService.findAllTeams();
  return response
    .status(200)
    .json(allTeams);
};

const findTeamByPk = async (request: Request, response: Response) => {
  const { id } = request.params;
  const findTeamById = await teamsService.getById(id);

  return response
    .status(200)
    .json(findTeamById);
};

export { getAllTeams, findTeamByPk };
