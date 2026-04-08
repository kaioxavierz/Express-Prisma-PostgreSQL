import { Router, Request, Response} from "express";
import { store, show, update, deleteBase } from "../Controllers/BaseController";
import { authMiddleware } from "../middlewares/authMiddleware";
export const router = Router();

router.get("/:code", authMiddleware, show);
router.post("/", authMiddleware, store);
router.put("/:code", authMiddleware, update);
router.delete("/:code", authMiddleware, deleteBase);

export default router;