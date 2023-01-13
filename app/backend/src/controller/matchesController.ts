import { Request, Response } from 'express';
import matchesService from '../service/matchesService';
import decodeTkn from '../helpers/createToken';

const getAllMatches = async (request: Request, response: Response) => {
  const { inProgress } = request.query;

  if (inProgress === 'true') {
    const matchesInprogress = await matchesService.findAllInProgress();
    return response
      .json(matchesInprogress);
  }

  if (inProgress === 'false') {
    const matchesInprogress = await matchesService.findAllNotInProgress();
    return response
      .json(matchesInprogress);
  }

  const allMatchs = await matchesService.findAllMatches();
  return response
    .json(allMatchs);
};

const addMatch = async (request: Request, response: Response) => {
  const { authorization: token } = request.headers;
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = request.body;

  if (!token) return response.status(401).json({ message: 'Token not found' });
  try {
    decodeTkn.decodeToken(token);
  } catch (error) {
    return response.status(401).json({ message: 'Token must be a valid token' });
  }

  const homeName = await matchesService.findTeamById(homeTeam);
  const awayName = await matchesService.findTeamById(awayTeam);

  if (homeName === awayName) {
    return response
      .status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  const result = await matchesService.saveMatch(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);

  return response.json(result);
};

const xablau = () => 'xablau';

export { getAllMatches, addMatch, xablau };
