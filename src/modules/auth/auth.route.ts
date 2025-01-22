// Defines routes for authentication
import { Router } from "express";
import AuthController from "./auth.controller";
import { loginLimiter } from "../../middleware/rateLimiter";


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