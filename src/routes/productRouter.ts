import { Router, Request, Response} from "express";
import { index, show, store, deleteProduct, update } from "../Controllers/ProductController";

export const router = Router();

router.get("/products", index);
router.get("/products/:id", show);
router.post("/products", store);
router.put("/products/:id", update);
router.delete("/products/:id", deleteProduct);

export default router;
