// Defines routes for authentication
import { Router } from "express";
import rateLimit from 'express-rate-limit';
import AuthController from "./auth.controller";
import { ErrorMessages } from "../../utils/ErrorMessages";

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login attempts per `windowMs`
  message: {
    message: ErrorMessages.RATE_LIMIT_TRY_LATER,
  },
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});

const router = Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: SignUp the User
 *     responses:
 *       200:
 *         description: Adds the new user to the database 
 */
router.post('/register', AuthController.register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login the User
 *     responses:
 *       200:
 *         description: Authenticate the user 
 */
router.post('/login', loginLimiter, AuthController.login);

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: LogOut the User
 *     responses:
 *       200:
 *         description: Logout the user
 */
router.post('/logout', AuthController.logout);


export default router;