import { Request, Response } from 'express';
import matchesService from '../service/matchesService';
// import decodeTkn from '../helpers/createToken';

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
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = request.body;

  const checkHomeId = await matchesService.findTeamById(homeTeam);
  const checkAwayId = await matchesService.findTeamById(awayTeam);

  if (!checkHomeId || !checkAwayId) {
    return response.status(404).json({ message: 'There is no team with such id!' });
  }

  if (homeTeam === awayTeam) {
    return response
      .status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  const result = await matchesService.saveMatch(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);

  return response.status(201).json(result);
};

const xablau = () => 'xablau';

export { getAllMatches, addMatch, xablau };
