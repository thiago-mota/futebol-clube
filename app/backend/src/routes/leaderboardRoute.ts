import { Router } from 'express';
import { getHomeLeaderboard, getAwayLb } from '../controller/leaderboardController';

const leaderboardRoute = Router();

leaderboardRoute.get('/leaderboard/home', getHomeLeaderboard);
leaderboardRoute.get('/leaderboard/away', getAwayLb);

export default leaderboardRoute;
