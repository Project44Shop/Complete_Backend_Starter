// Handles only HTTP requests
import { Request, Response } from "express";
import AuthService from "./auth.service";
import { HttpStatus } from "../../utils/HttpStatus";
import { ErrorMessages } from "../../utils/ErrorMessages";
import { SuccessMessages } from "../../utils/SuccessMessages";


class AuthController {

  static async register(req: Request, res: Response) {
    try {
      const { email, username, password } = req.body;
      const newUser = await AuthService.registerUser(email, username, password);
      res.status(HttpStatus.CREATED).json(newUser);
    } catch (error) {
      console.error(error);
      res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send(ErrorMessages.USER_CREATION_FAILED);
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
        .status(HttpStatus.OK)
        .json(SuccessMessages.USER_LOGGED_IN);

    } catch (error) {
        console.log(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: ErrorMessages.LOGIN_FAILED });
    }
  }

  static logout = (req: Request, res: Response) => {
    res
    .clearCookie("authToken")
    .status(HttpStatus.OK)
    .json({message: SuccessMessages.USER_LOGGED_OUT})
};

}

export default AuthController;