import { Router } from 'express';
import { getAllTeams, findTeamByPk } from '../controller/teamsController';

const teamsRoute = Router();

teamsRoute.get('/teams', getAllTeams);
teamsRoute.get('/teams/:id', findTeamByPk);

export default teamsRoute;
