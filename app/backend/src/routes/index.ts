import { Router } from 'express';
import loginRoute from './userRoute';

const router = Router();

router.use('/login', loginRoute);

export default router;
