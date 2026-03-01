import { hashPassword } from "../utils/password";
import { AppError } from "../utils/appError";
import { prisma } from "../client";
import { IUserInterface, IUserService } from "../interfaces/User";

export class UserService implements IUserService {

    async createUser(user: IUserInterface): Promise<IUserInterface> {

        const emailExists = await prisma.user.findUnique({
            where: { email: user.email },
        });

        if (emailExists) {
            throw new AppError("Email já cadastrado", 409);
        }

        const hashedPassword = await hashPassword(user.password);

        return prisma.user.create({
            data: { ...user, password: hashedPassword },
        });
    }

    async findAll(): Promise<IUserInterface[]> {
        return prisma.user.findMany();
    }

    async findById(userId: number): Promise<IUserInterface> {

        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new AppError("Usuário não encontrado", 404);
        }

        return user;
    }

    async updateUser(userId: number, newUser: IUserInterface): Promise<IUserInterface> {

        const userExists = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!userExists) {
            throw new AppError("Usuário não encontrado", 404);
        }

        return prisma.user.update({
            where: { id: userId },
            data: newUser,
        });
    }

    async deleteUser(userId: number): Promise<void> {

        const userExists = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!userExists) {
            throw new AppError("Usuário não encontrado", 404);
        }

        await prisma.user.delete({
            where: { id: userId },
        });
    }
}