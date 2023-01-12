import { Router } from 'express';
import { getAllTeams } from '../controller/teamsController';

const teamsRoute = Router();

teamsRoute.get('/teams', getAllTeams);

export default teamsRoute;
