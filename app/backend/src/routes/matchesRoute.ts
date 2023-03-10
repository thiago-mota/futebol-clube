import { Router } from 'express';
import { getAllMatches, addMatch, updateMatchProgress,
  updateGameResult } from '../controller/matchesController';
import verifyToken from '../middlewares/authMiddleware';

const matchesRoute = Router();

matchesRoute.get('/matches', getAllMatches);
matchesRoute.post('/matches', verifyToken, addMatch);
matchesRoute.patch('/matches/:id/', updateGameResult);
matchesRoute.patch('/matches/:id/finish', updateMatchProgress);

export default matchesRoute;
