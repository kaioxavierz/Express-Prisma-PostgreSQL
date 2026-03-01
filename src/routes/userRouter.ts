import { Router, Request, Response} from "express";
import { index, show, store, deleteUser, update } from "../Controllers/UserController";

export const router = Router();

router.get("/", index);
router.get("/:id", show);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", deleteUser);

export default router;