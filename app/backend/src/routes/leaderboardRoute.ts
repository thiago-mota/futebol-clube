import { Router } from 'express';
import { getHomeLeaderboard } from '../controller/leaderboardController';

const leaderboardRoute = Router();

leaderboardRoute.get('/leaderboard/home', getHomeLeaderboard);

export default leaderboardRoute;
