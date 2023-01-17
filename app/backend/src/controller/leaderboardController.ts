import { Request, Response } from 'express';
import leaderboardService from '../service/leaderboardService';

const getHomeLeaderboard = async (_request: Request, response: Response) => {
  const homeTeamLb = await leaderboardService.homeTeamLeaderboard();

  return response
    .status(200)
    .json(homeTeamLb);
};

const getAwayLb = async (_request: Request, response: Response) => {
  const awayTeamLb = await leaderboardService.awayTeamLeaderboard();

  return response
    .status(200)
    .json(awayTeamLb);
};

export { getHomeLeaderboard, getAwayLb };
