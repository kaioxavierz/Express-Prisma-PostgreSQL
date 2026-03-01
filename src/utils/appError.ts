import { Response } from "express";

export class AppError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode
    }
};

export function handleError(error: any, res: Response) {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(500).json({ error: "Erro interno do servidor" });
}