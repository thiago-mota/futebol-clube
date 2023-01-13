import { Router } from 'express';
import { getAllMatches, addMatch } from '../controller/matchesController';
import verifyToken from '../middlewares/authMiddleware';

const matchesRoute = Router();

matchesRoute.get('/matches', getAllMatches);
matchesRoute.post('/matches', verifyToken, addMatch);

export default matchesRoute;
