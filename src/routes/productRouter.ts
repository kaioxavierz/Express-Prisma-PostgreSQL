import { Router, Request, Response} from "express";
import { index, show, store, deleteProduct, update } from "../Controllers/ProductController";

export const router = Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", deleteProduct);

export default router;
