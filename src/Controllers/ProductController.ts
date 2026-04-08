import { Request, Response } from "express";
import { ProductService } from "../services/productService";
import { IUProductInterface } from "../interfaces/Product";
import { AppError } from "../utils/appError";
import { Prisma } from "@prisma/client";

const productService = new ProductService();

export async function index( req: Request, res: Response ): Promise<Response> {
  console.log(req.userId, req.userEmail)
  const products: IUProductInterface[] = await productService.findAll();

  if(products.length === 0) {
    throw new AppError("Nenhum produto encontrado", 404);
  };

  return res.status(200).json(products);
}

export async function show(req: Request, res: Response): Promise<Response> {
  const productId = String(req.params.id);
  const product = await productService.findById(productId);

  if (!product) {
    throw new AppError("Produto não encontrado", 404);
  }
  return res.status(200).json(product);
}

export async function store(req: Request, res: Response): Promise<Response> {
  const data: Prisma.ProductCreateInput = {
    name: req.body.name,
    sku: req.body.sku,
  };

  if(!data.name || !data.sku) {
    throw new AppError("Nome e SKU são obrigatórios", 400);
  };

  const newProduct = await productService.createProduct(data);
  return res.status(201).json(newProduct);
}

export async function update(req: Request, res: Response): Promise<Response> {

  const productId = String(req.params.id);

  const data: Prisma.ProductUpdateInput = {
    name: req.body.name,
    sku: req.body.sku,
  };

  if(!data.name || !data.sku) {
    throw new AppError("Nome e SKU são obrigatórios", 400);
  };

  const updatedProduct = await productService.updateProduct(
    productId,
    data
  );
  return res.status(200).json(updatedProduct);
};

export async function deleteProduct( req: Request, res: Response): Promise<Response> {
  const productId = String(req.params.id);

   const deletedProduct = await productService.deleteProduct(productId);

  return res.status(204).json(`Produto ${deletedProduct.name} deletado com sucesso`);
};