import { Request, Response } from 'express';
import matchesService from '../service/matchesService';

const getAllMatches = async (_request: Request, response: Response) => {
  const allMatchs = await matchesService.findAllMatches();
  return response
    .json(allMatchs);
};

const xablau = () => 'xablau';

export { getAllMatches, xablau };
