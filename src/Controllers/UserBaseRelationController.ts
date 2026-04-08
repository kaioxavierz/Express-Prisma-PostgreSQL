import { Request, Response } from "express";
import { UserBaseService } from "../services/userBase";
import { AppError } from "../utils/appError";

const service = new UserBaseService();


export async function addUserToBase(req: Request, res: Response) {
    const data = {
        userId: req.body.userId,
        baseId: req.body.baseId,
        role: req.body.role || "USER"
    }
    if( !data.userId || !data.baseId) {
        throw new AppError("userId e baseId são obrigatórios", 400)
    }
    try {
        await service.addUserToBase(data.userId, data.baseId, data.role);
        res.status(200).json({ message: "Usuário adicionado à base com sucesso" });
    } catch (error) {
        throw new AppError("Error ao adicionar usuário à base", 500);
    }
}

export async function listBases(req: Request, res: Response) {
    const userId = String(req.params.userId);
    if( !userId ) {
        throw new AppError("userId é obrigatório", 400)
    }
    try {
        const bases = await service.getBasesFromUser(userId);
        res.status(200).json({ bases });
    } catch (error) {
        throw new AppError("Error ao buscar bases do usuário", 500);
    }
}

export async function listUsers(req: Request, res: Response) {
    const baseId = String(req.params.baseId);
    if( !baseId ) {
        throw new AppError("baseId é obrigatório", 400)
    }
    try {
        const users = await service.getUsersFromBase(baseId);
        res.status(200).json({ users });
    } catch (error) {
        throw new AppError("Error ao buscar usuários da base", 500);
    }
}

export async function updateUserRole(req: Request, res: Response) {
    const userId = String(req.params.userId);
    const baseId = String(req.params.baseId);
    const role = String(req.body.role);

    if( !userId || !baseId || !role ) {
        throw new AppError("userId, baseId e role são obrigatórios", 400)
    }

    if( !["USER", "ADMIN"].includes(role)) {
        throw new AppError("Role inválida. Deve ser 'USER' ou 'ADMIN'", 400);
    }

    try {
        await service.updateUserRole(userId, baseId, role);
        res.status(200).json({ message: "Função do usuário atualizada com sucesso" });
    } catch (error) {
        throw new AppError("Error ao atualizar função do usuário", 500);
    }
}

export async function removeUserFromBase(req: Request, res: Response) {
    const userId = String(req.params.userId);
    const baseId = String(req.params.baseId);

    if( !userId || !baseId ) {
        throw new AppError("userId e baseId são obrigatórios", 400)
    }

    try {
        await service.removeUserFromBase(userId, baseId);
        res.status(200).json({ message: "Usuário removido da base com sucesso" });
    } catch (error) {
        throw new AppError("Error ao remover usuário da base", 500);
    }
}