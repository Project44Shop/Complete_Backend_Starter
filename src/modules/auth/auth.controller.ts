// Handles only HTTP requests
import { Request, Response } from "express";
import prisma from "../../../lib/prisma"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthService from "./auth.service";
  
const saltRounds = 10;

const TOKEN_EXPIRATION = "7d"; // Token validity period


class AuthController {

  static async register(req: Request, res: Response) {
    try {
      const { email, username, password } = req.body;
      const newUser = await AuthService.registerUser(email, username, password);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res
      .status(500)
      .send('Error creating user');
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const {username, password } = req.body;
      const token = await AuthService.loginUser(username, password)

      res.cookie("authToken", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        secure: process.env.NODE_ENV === "production",
    })
        .status(200)
        .json("User Login Success");

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to login" });
    }
  }

  static logout = (req: Request, res: Response) => {
    res
    .clearCookie("authToken")
    .status(200)
    .json({message: "Logout Success"})
};

}

export default AuthController;