import { Router } from 'express';
import { getAllMatches, addMatch, updateMatchProgress } from '../controller/matchesController';
import verifyToken from '../middlewares/authMiddleware';

const matchesRoute = Router();

matchesRoute.get('/matches', getAllMatches);
matchesRoute.post('/matches', verifyToken, addMatch);
matchesRoute.patch('/matches/:id/finish', updateMatchProgress);

export default matchesRoute;
