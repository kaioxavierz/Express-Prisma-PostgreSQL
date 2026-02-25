import { Router, Request, Response} from "express";
import { index, show, store, deleteUser, update } from "../Controllers/UserController";

export const router = Router();

router.get("/users", index);
router.get("/users/:id", show);
router.post("/users", store);
router.put("/users/:id", update);
router.delete("/users/:id", deleteUser);

export default router;