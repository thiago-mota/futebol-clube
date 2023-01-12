import { Router } from 'express';
import loginRoute from './userRoute';
import teamsRoute from './teamsRoute';

const router = Router();

router.use('/login', loginRoute);
router.use('/', teamsRoute);

export default router;
