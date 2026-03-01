import { Request, Response } from "express";
import { ProductService } from "../services/productService";
import { Prisma } from "@prisma/client";

const productService = new ProductService();

export async function index(
  req: Request,
  res: Response
): Promise<Response> {
  const products = await productService.findAll();
  return res.json(products);
}

export async function show(
  req: Request,
  res: Response
): Promise<Response> {

  const productId = parseInt(req.params.id);

  const product = await productService.findById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.json(product);
}

export async function store(
  req: Request,
  res: Response
): Promise<Response> {

  const data: Prisma.ProductCreateInput = {
    name: req.body.name,
    preco: req.body.preco
  };

  const newProduct = await productService.createProduct(data);

  return res.status(201).json(newProduct);
}

export async function update(
  req: Request,
  res: Response
): Promise<Response> {

  const productId = parseInt(req.params.id);

  const data: Prisma.ProductUpdateInput = {
    name: req.body.name,
    preco: req.body.preco
  };

  const updatedProduct = await productService.updateProduct(
    productId,
    data
  );

  return res.json(updatedProduct);
}

export async function deleteProduct(
  req: Request,
  res: Response
): Promise<Response> {

  const productId = parseInt(req.params.id);

  await productService.deleteProduct(productId);

  return res.status(204).send();
}