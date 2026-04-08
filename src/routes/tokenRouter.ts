import { Router, Request, Response} from "express";
import { generateToken } from "../Controllers/TokenController";

export const router = Router();

router.post("/", generateToken);

export default router;