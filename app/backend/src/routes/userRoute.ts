import { Router } from 'express';
import { userLogin, getUserRole } from '../controller/userController';

const loginRoute = Router();

loginRoute.post('/', userLogin);
loginRoute.get('/validate', getUserRole);

export default loginRoute;
