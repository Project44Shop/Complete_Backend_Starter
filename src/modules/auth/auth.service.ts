// Encapsulates business logic for authentication

import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRATION = "7d";
const SALT_ROUNDS = 10;

class AuthService {
    static async registerUser(email: string, username: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        return prisma.user.create({
            data: { email, username, password: hashedPassword },
        });
    }

    static async loginUser(username: string, password: string) {

        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }

        const user = await prisma.user.findUnique({
            where: {username}
        })

        if (!user) {
            throw new Error("Invalid Credentials");
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            throw new Error("Invalid Credentials")
        }

        // Create JWT
  
        return jwt.sign({ userId: user.id, username: user.username}, JWT_SECRET, {
            expiresIn: TOKEN_EXPIRATION,
        })
    }
}

export default AuthService;