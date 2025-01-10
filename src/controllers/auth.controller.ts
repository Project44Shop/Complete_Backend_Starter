import { Request, Response } from "express";
import prisma from "../../lib/prisma"
import bcrypt from "bcrypt";
  
const saltRounds = 10;

export const register = async (req: Request, res: Response) => {
    try {
      const { email, username, password } = req.body;
  
      // Hash the password (use bcrypt or any other library)
      const hashedPassword = await bcrypt.hash(password, saltRounds)
  
      // Save user to the database
      const newUser = await prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
        },
      });
  
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating user');
    }
  };

export const login = (req: Request, res: Response) => {
    // DB Operations
    res.status(200).send('User Login')
}

export const logout = (req: Request, res: Response) => {
    // DB Operations
    res.status(200).send('User Logout')
}