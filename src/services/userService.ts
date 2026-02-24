import { prisma } from "../../prisma/client";
import { IUserInterface, IUserService,  } from '../interfaces/User';

export class UserService implements IUserService {
    // Função para criar um novo usuário
    async createUser(user: IUserInterface): Promise<IUserInterface> {
        if (!user.name || !user.email || !user.password) {
            throw new Error("Nome, email e senha são obrigatórios");
        };
        const emailExists = await prisma.user.findUnique({
            where: { email: user.email },
        });
        if(emailExists) {
            throw new Error("Email já cadastrado");
        };
        const newUser = await prisma.user.create({  user });
        return newUser;
    }

    // Função para buscar todos os usuários
    async findAll(): Promise<IUserInterface[]> {
        const users = await prisma.user.findMany();
        return users;
    }

    // Função para buscar um usuário por ID
    async findById(userId: number): Promise<IUserInterface | null> {
        if(!userId) {
            throw new Error("ID do usuário é obrigatório");
        };
        const user = await prisma.user.findUnique({
            where : { id: userId },
        });
        if(!user) {
            throw new Error("Usuário não encontrado");
        };
        return user;
    }

    // Função para atualizar um usuário por ID
    async updateUser(userId: number, newUser: IUserInterface): Promise<IUserInterface> {
        if(!userId) {
            throw new Error("Id do usuário é obrigatório");
        };
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        if(!user) {
            throw new Error("Usuário não encontrado");
        };
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: newUser,
        });
        return updatedUser;
    };
    // Função para deletar um usuário por ID
    async deleteUser(userId: number): Promise<void> {
        if(!userId) {
            throw new Error("Id do usuário é obrigatório");
        };
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        if(!user) {
            throw new Error("Usuário não encontrado");
        };

        await prisma.user.delete({
            where: { id: userId },
        })
  }
}
