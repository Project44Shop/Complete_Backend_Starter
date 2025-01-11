import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller";
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login attempts per `windowMs`
  message: {
    message: "Too many login attempts from this IP. Please try again after 15 minutes.",
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
router.post('/register', register)

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login the User
 *     responses:
 *       200:
 *         description: Authenticate the user 
 */
router.post('/login', loginLimiter, login)

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: LogOut the User
 *     responses:
 *       200:
 *         description: Logout the user
 */
router.post('/logout', logout)


export default router;