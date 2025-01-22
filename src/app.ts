// This file should handle the application configuration.
import express, { Request, Response } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import swaggerOptions from './config/Swagger';
import routes from './routes/index'
import cookieParser from 'cookie-parser';


// 1. Load environment variables
dotenv.config();

// 2. Initialize the app
const app = express();
app.use(cookieParser());

// 3. Middleware
app.use(express.json());

// 4. Swagger Docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// 5. Routes
app.use('/api', routes);
// app.use('/api/auth', authRoute);

// Base Route Documentation
/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     responses:
 *       200:
 *         description: A welcome message
 */
app.get('/', (req: Request, res: Response) => {
  res.status(200).send("Let's build some good stuff!");
});

export default app;
