import { Router, Request, Response} from "express";
import { addProductToInventory, deleteProductFromInventory, getInventoryByBaseId, updateProductQuantity } from "../Controllers/InventoryController";
import { authMiddleware } from "../middlewares/authMiddleware";
export const router = Router();

router.get("/:baseId", authMiddleware, getInventoryByBaseId);
router.post("/", authMiddleware, addProductToInventory);
router.put("/:baseId/:productId", authMiddleware, updateProductQuantity);
router.delete("/:baseId/:productId", authMiddleware, deleteProductFromInventory);

export default router;