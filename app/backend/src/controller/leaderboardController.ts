import { Request, Response } from 'express';
import leaderboardService from '../service/leaderboardService';

const getHomeLeaderboard = async (request: Request, response: Response) => {
  const lbHome = await leaderboardService.homeTeamLeaderboard();

  return response.status(200).json(lbHome);
};

const xablau = () => 'xablau';

export { getHomeLeaderboard, xablau };
