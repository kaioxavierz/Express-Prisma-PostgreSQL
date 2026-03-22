import { AppError } from "../utils/appError";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { BaseService } from "../services/baseService";
import { Base } from "@prisma/client";

const baseService = new BaseService();

export async function store(req: Request, res: Response): Promise<Response> {
    const data: Prisma.BaseCreateInput = {
        name: req.body.name,
        code: req.body.code,
        password: req.body.password
    };

    if(!data.name || !data.password) {
        throw new AppError("Nome e senha são obrigatórios", 400);
    };
    const newBase: Base = await baseService.create(data);
    return res.status(201).json(newBase);
}

export async function show(req: Request, res: Response): Promise<Response> {
    const code = String(req.params.code);
    console.log(code);
    const base = await baseService.findById(code);

    if(!base) {
        throw new AppError("Base não encontrada", 404);
    }

    return res.status(201).json(base);
}

export async function update(req: Request, res: Response): Promise<Response> {
    const code = String(req.params.code);
    
    if(!req.body.name || !req.body.password) {
        throw new AppError("Nome e senha são obrigatórios", 400);
    }
    if(!code) {
        throw new AppError("Código não passado ou inválido", 400);
    }

    const newData: Prisma.BaseUpdateInput = {
        name: req.body.name,
        code: req.body.code,
        password: req.body.password
    };
    const baseUpdate = await baseService.update( code, newData as any);

    if(!baseUpdate) { 
        throw new AppError("Base não encontrada", 404);
    }
    return res.status(200).json(baseUpdate);
}

export async function deleteBase(req: Request, res: Response): Promise<Response> {
    const code = String(req.params.code);

    if(!code) {
        throw new AppError("Código não passado ou inválido", 400);
    }

    await baseService.delete(code);

    return res.status(200).json({ message: "Base deletada com sucesso" });
}