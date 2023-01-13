import { Router } from 'express';
import loginRoute from './userRoute';
import teamsRoute from './teamsRoute';
import matchesRoute from './matchesRoute';

const router = Router();

router.use('/login', loginRoute);
router.use('/', teamsRoute);
router.use('/', matchesRoute);

export default router;
