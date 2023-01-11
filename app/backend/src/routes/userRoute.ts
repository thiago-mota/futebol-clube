import { Router } from 'express';
import userLogin from '../controller/userController';

const loginRoute = Router();

loginRoute.post('/', userLogin);

export default loginRoute;
