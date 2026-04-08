import { Router, Request, Response} from "express";
import { index, show, store, deleteUser, update } from "../Controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";

export const router = Router();

router.get("/", authMiddleware, index);
router.get("/:id", authMiddleware, show);
router.post("/", authMiddleware, store);
router.put("/:id", authMiddleware, update);
router.delete("/:id", authMiddleware, deleteUser);

export default router;