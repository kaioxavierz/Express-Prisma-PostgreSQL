import { prisma } from "../client";
import { AppError } from "../utils/appError";
import { IIventoryInterface } from "../interfaces/Inventory";

export class InventoryService implements IIventoryInterface {
    async addProductToInventory(baseId: string, productId: string, quantity: number): Promise<void> {
        await prisma.inventory.create({
            data: {
                productId: productId,
                baseId: baseId,
                quantity: quantity
            }
        })
    }

    async updateProductQuantity(baseId: string, productId: string, newQuantity: number): Promise<void> {
        await prisma.inventory.update({
            where: {
                productId_baseId: {
                    productId: productId,
                    baseId: baseId,
                }
            },
            data: {
                quantity: newQuantity
            }
        });
    }
    async removeProductFromInventory(baseId: string, productId: string): Promise<void> {
        await prisma.inventory.delete({
            where: {
                productId_baseId: {
                    productId: productId,
                    baseId: baseId,
                }
            }
        });
    }
    async getInventoryByBaseId(baseId: string): Promise<any[]> {
        return prisma.inventory.findMany({
            where: {
                baseId: baseId
            }
        });
    }
    
}