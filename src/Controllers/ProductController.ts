import { IUProductInterface } from "../interfaces/Product";
import { ProductService } from "../services/productService";

const productService = new ProductService();

export async function index(): Promise<IUProductInterface[]> {
    const products = await productService.findAll();
    return products;
}

export async function show(req: any, res: any): Promise<IUProductInterface | null> {
    const productId = parseInt(req.params.id);
    const product = await productService.findById(productId);
    return product;
}

export async function store(req: any, res: any): Promise<IUProductInterface> {
    const { name, description, price, stock } = req.body;
    const product: IUProductInterface = { name, description, price, stock };
    const newProduct = await productService.createProduct(product);
    return newProduct;
}

export async function update(req: any, res: any): Promise<IUProductInterface> {
    const productId = parseInt(req.params.id);
    const { name, description, price, stock } = req.body;
    const newProduct: IUProductInterface = { name, description, price, stock };
    const updatedProduct = await productService.updateProduct(productId, newProduct);
    return updatedProduct;
}

export async function deleteProduct(req: any, res: any): Promise<void> {
    const productId = parseInt(req.params.id);
    await productService.deleteProduct(productId);
    return res.status(204).send();
}