import express from 'express';
import authRoute from '../modules/auth/auth.route';

const router = express.Router();

router.use('/auth', authRoute);

// Additional routes for other modules

export default router;
