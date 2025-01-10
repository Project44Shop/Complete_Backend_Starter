import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller";

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
router.post('/login', login)

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