import "dotenv/config";
import { prisma } from "../client";
import { Prisma, Product } from "@prisma/client";

export class ProductService {

    async createProduct(
        product: Prisma.ProductCreateInput
    ): Promise<Product> {

        const newProduct = await prisma.product.create({
            data: product
        });

        return newProduct;
    }

    async findAll(): Promise<Product[]> {
        return prisma.product.findMany();
    }

    async findById(productId: number): Promise<Product | null> {
        return prisma.product.findUnique({
            where: { id: productId }
        });
    }

    async updateProduct(
        productId: number,
        newProduct: Prisma.ProductUpdateInput
    ): Promise<Product> {

        return prisma.product.update({
            where: { id: productId },
            data: newProduct,
        });
    }

    async deleteProduct(productId: number): Promise<void> {
        await prisma.product.delete({
            where: { id: productId }
        });
    }
}