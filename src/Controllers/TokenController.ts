import { Request, Response } from "express";
import { AppError } from "../utils/appError";
import { prisma } from "../client";
import { User } from "@prisma/client";
import { comparePassword } from "../utils/password";
import jwt from "jsonwebtoken";

export async function generateToken(req: Request, res: Response) {
  const data: User = req.body;

  if (!data.email || !data.password) {
        throw new AppError("Credenciais inválidas", 400);
  }

  const userExists = await prisma.user.findUnique({
            where: { email: data.email },
  });

  if(!userExists) {
        throw new AppError("Credenciais inválidas", 400);
  }

  const passwordMatch = await comparePassword(data.password, userExists.password);
  if(!passwordMatch) {
        throw new AppError("Credenciais inválidas", 400);
  }

    const token = jwt.sign(
        { 
            id:(userExists.id),
            email: userExists.email
        },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
    );
    res.json({ token });
}