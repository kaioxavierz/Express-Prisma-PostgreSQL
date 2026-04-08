import "dotenv/config";
import { prisma } from "../client";
import { Prisma, Product } from "@prisma/client";
import { IUProductInterface } from "../interfaces/Product";

export class ProductService {

    async createProduct( ...products: IUProductInterface[] ): Promise<Product> {
        const createdProducts: Product[] = [];

        for (const product of products) {
            await prisma.product.create({ data: product });
            createdProducts.push(product as Product);
        }
        return createdProducts[createdProducts.length - 1];
    };

    async findAll(): Promise<Product[]> {
        return prisma.product.findMany();
    };

    async findById(productId: string): Promise<Product | null> {
        return prisma.product.findUnique({ where: { id: productId } });
    };

    async updateProduct(
        productId: string,
        newProduct: Prisma.ProductUpdateInput
    ): Promise<Product> {
        return prisma.product.update({
            where: { id: productId },
            data: newProduct,
        });
    };

    async deleteProduct(productId: string): Promise<IUProductInterface> {
        const deletedProduct = await prisma.product.delete({
            where: { id: productId }
        });
        return deletedProduct;
    };
}