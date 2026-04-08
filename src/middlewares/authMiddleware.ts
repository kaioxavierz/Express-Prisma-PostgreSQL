import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError";


interface TokenPayload {
  id: string;
  email: string;
}
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userEmail?: string;
    }
  }
}

export function authMiddleware( req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token não fornecido", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new AppError("JWT_SECRET não configurado", 500);
    }
    const decoded = jwt.verify(token, jwtSecret) as TokenPayload;
    const { id, email} = decoded;
    req.userId = id
    req.userEmail = email
    return next();
  } catch {
    throw new AppError("Token inválido", 401);
  }
}