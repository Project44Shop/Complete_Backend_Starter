import { Request, Response } from "express";
import prisma from "../../lib/prisma"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
  
const saltRounds = 10;

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

const TOKEN_EXPIRATION = "7d"; // Token validity period

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
      res
      .status(500)
      .send('Error creating user');
    }
  };

export const login = async (req: Request, res: Response) => {

  try {

    const {username, password} = req.body;
    const user = await prisma.user.findUnique({
      where:{username}
    })

    if (!user) {
      res
      .status(401)
      .json({message: "Invalid Credentials"})
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      res
      .status(401)
      .json({message: "Invalid Credentials"});
      return;
    }

    // When cookie expires
    const age = 1000 * 60 * 60 * 24 * 7;


    // Create JWT

    const token = jwt.sign({ userId: user.id, username: user.username}, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRATION,
    })

    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: age,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json("User Login Success")

  } catch (error) {
    console.log(error);
    res
    .status(500)
    .json({message: "Failed to login"})
  }
};

export const logout = (req: Request, res: Response) => {
    res
    .clearCookie("authToken")
    .status(200)
    .json({message: "Logout Success"})
};