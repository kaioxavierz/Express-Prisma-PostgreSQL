import { IUProductInterface } from "../interfaces/Product";
import { prisma } from "../client";

export class ProductService {
    private product: IUProductInterface[] = [];

    async createProduct(product: IUProductInterface): Promise<IUProductInterface> {
        const newProduct = await prisma.product.create({ data: product });
        return newProduct;
    }

    async findAll(): Promise<IUProductInterface[]> {
        const products = await prisma.product.findMany();
        return products;
    }

    async findById(productId: number): Promise<IUProductInterface | null> {
        const product = await prisma.product.findUnique({ where: { id: productId } });
        return product;
    }

    async updateProduct(productId: number, newProduct: IUProductInterface): Promise<IUProductInterface> {
        const updatedProduct = await prisma.product.update({
            where: { id: productId },
            data: newProduct,
        });
        return updatedProduct;
    }

    async deleteProduct(productId: number): Promise<void> {
        await prisma.product.delete({ where: { id: productId } });
    }
}