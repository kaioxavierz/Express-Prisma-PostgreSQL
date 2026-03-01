import { Request, Response } from "express";
import { IUserService } from "../interfaces/User";
import { UserService } from "../services/userService";
import { AppError } from "../utils/appError";

const userService: IUserService = new UserService();

export async function index(req: Request, res: Response) {
  const users = await userService.findAll();
  return res.status(200).json(users);
}

export async function show(req: Request, res: Response) {
  const userId = Number(req.params.id);
  if (!userId || isNaN(userId)) {
    throw new AppError("ID inválido", 400);
  }

  const user = await userService.findById(userId);
  return res.status(200).json(user);
}

export async function store(req: Request, res: Response) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new AppError("Nome, email e senha são obrigatórios", 400);
  }

  const newUser = await userService.createUser({ name, email, password });
  return res.status(201).json(newUser);
}

export async function update(req: Request, res: Response) {
  const userId = Number(req.params.id);
  const { name, email, password } = req.body;

  if (!userId || isNaN(userId)) {
    throw new AppError("ID inválido", 400);
  }

  const updatedUser = await userService.updateUser(userId, {
    name,
    email,
    password,
  });

  return res.status(200).json(updatedUser);
}

export async function deleteUser(req: Request, res: Response) {
  const userId = Number(req.params.id);

  if (!userId || isNaN(userId)) {
    throw new AppError("ID inválido", 400);
  }

  await userService.deleteUser(userId);
  return res.status(204).send();
}