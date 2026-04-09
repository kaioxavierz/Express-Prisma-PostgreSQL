import { prisma } from "../client";
import { IULoginService } from "../interfaces/Login";
import { AppError } from "../utils/appError";
import { UserService } from "./userService";
import { createToken } from "./tokenService";

const userService = new UserService();

export class LoginService implements IULoginService {
    async login(email: string, password: string): Promise<{ token: string }> {
       
    }
}