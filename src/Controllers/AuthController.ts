import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

export class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const result = await authService.login(email, password);

    return res.json(`usuario logado com sucesso: ${result.token}`);
  }
}