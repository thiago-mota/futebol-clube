import { Router } from 'express';
import { getAllMatches } from '../controller/matchesController';

const matchesRoute = Router();

matchesRoute.get('/matches', getAllMatches);

export default matchesRoute;
