import { InventoryService } from "../services/inventory";
import { Request, Response } from "express";
import { AppError } from "../utils/appError";

const service = new InventoryService();

export async function addProductToInventory(req: Request, res: Response) {
    const { baseId, productId, quantity } = req.body;

    if(!baseId || !productId || quantity === undefined) {
        throw new AppError("baseId, productId e quantity são obrigatórios", 400);
    }
    await service.addProductToInventory(baseId, productId, quantity);
    res.status(201).json({ message: "Produto adicionado ao inventário com sucesso" });
}

export async function deleteProductFromInventory(req: Request, res: Response) {
    const data = {
        baseId: String(req.params.baseId),
        productId: String(req.params.productId)
    }
    if(!data.baseId || !data.productId) {
        throw new AppError("baseId e productId são obrigatórios", 400);
    }

    await service.removeProductFromInventory(data.baseId, data.productId);
    res.status(200).json({ message: "Produto removido do inventário com sucesso" });
}

export async function updateProductQuantity(req: Request, res: Response) {
    const data = {
        baseId: String(req.params.baseId),
        productId: String(req.params.productId)
    };

    if(!data.baseId || !data.productId) {
        throw new AppError("baseId e productId são obrigatórios", 400);
    }
    const { newQuantity } = req.body;
    await service.updateProductQuantity(data.baseId, data.productId, newQuantity);
    res.status(200).json({ message: "Quantidade do produto atualizada com sucesso" });
}

export async function getInventoryByBaseId(req: Request, res: Response) {
    const data = {
        baseId: String(req.params.baseId)
    };
    if(!data.baseId) { 
        throw new AppError("baseId é obrigatório", 400);
    }
    const inventory = await service.getInventoryByBaseId(data.baseId);
    res.status(200).json(inventory);
}