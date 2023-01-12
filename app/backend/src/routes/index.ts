import { Router } from 'express';
import loginRoute from './userRoute';
import teamsRoute from './teamsRoute';

const router = Router();

router.use('/login', loginRoute);
router.use('/teams', teamsRoute);

export default router;
