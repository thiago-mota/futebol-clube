import { Router } from 'express';
import { getAllMatches, addMatch } from '../controller/matchesController';

const matchesRoute = Router();

matchesRoute.get('/matches', getAllMatches);
matchesRoute.post('/matches', addMatch);

export default matchesRoute;
