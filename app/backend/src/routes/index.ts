import { Router } from 'express';
import loginRoute from './userRoute';
import teamsRoute from './teamsRoute';
import matchesRoute from './matchesRoute';
import leaderboardRoute from './leaderboardRoute';

const router = Router();

router.use('/login', loginRoute);
router.use('/', teamsRoute);
router.use('/', matchesRoute);
router.use('/', leaderboardRoute);

export default router;
