import { Request, Response } from 'express';
import teamsService from '../service/teamsService';

const getAllTeams = async (_request: Request, response: Response) => {
  const allTeams = await teamsService.findAllTeams();
  console.log(allTeams);

  return response.status(200).json(allTeams);
};

const xablau = async () => 'xablau';

export { getAllTeams, xablau };
