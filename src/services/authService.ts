import { prisma } from "../client";
import { IULoginService } from "../interfaces/Auth";
import { AppError } from "../utils/appError";
import { UserService } from "./userService";
import { createToken } from "./tokenService";
import { authSchema } from "../schemas/auth.schema";

const userService = new UserService();

export class AuthService implements IULoginService {
    async login(email: string, password: string): Promise<{ token: string }> {
       const parsed = authSchema.safeParse({email, password});

       if(!parsed.success) {
        throw new AppError("Dados de login inválidos", 400);
       };
       
       const user = await prisma.user.findUnique({ where: { email } });

       if(!user) {
          throw new AppError("Email ou senha inválidos", 400);
        }
        
        const passwordMatch = await userService.comparePassword(password, user.password);

        if(!passwordMatch) {
            throw new AppError("Email ou senha inválidos", 400);
        }

        const token = createToken(parsed.data);
        return { token };
    }
}