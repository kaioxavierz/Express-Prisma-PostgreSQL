import { Router, Request, Response} from "express";
import { store, show, update, deleteBase } from "../Controllers/BaseController";

export const router = Router();

router.get("/:code", show);
router.post("/", store);
router.put("/:code", update);
router.delete("/:code", deleteBase);

export default router;