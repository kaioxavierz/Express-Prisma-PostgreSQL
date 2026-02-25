//import { prisma } from "../../prisma/client";
import { IUserController, IUserService, IUserInterface } from "../interfaces/User";
import { UserService } from "../services/userService";

const userService: IUserService = new UserService();

export async function index(): Promise< IUserInterface[]> {
    const users = await userService.findAll();
    return users;
};

export async function show(req: any, res: any): Promise<IUserInterface | null> {
    const userId = parseInt(req.params.id);
    const user = await userService.findById(userId);
    return user;
}

export async function store(req: any, res: any): Promise<IUserInterface> {
    const { name, email, password } = req.body;
    const user: IUserInterface = { name, email, password };
    const newUser = await userService.createUser(user);
    return newUser;
}

export async function update(req: any, res: any): Promise<IUserInterface> {
    const userId = parseInt(req.params.id);
    const { name, email, password } = req.body;
    const newUser: IUserInterface = { name, email, password };
    const updatedUser = await userService.updateUser(userId, newUser);
    return updatedUser;
}

export async function deleteUser(req: any, res: any): Promise<void> {
    const userId = parseInt(req.params.id);
    await userService.deleteUser(userId);
    return res.status(204).send();
}

//    
//    return res.json(user);
//}