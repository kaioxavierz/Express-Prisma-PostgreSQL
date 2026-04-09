import { Router, Request, Response} from "express";
import { AuthController } from "../Controllers/AuthController";
import { authMiddleware } from "../middlewares/authMiddleware";
export const router = Router();

const authController = new AuthController();

router.post("/login", authController.login);

export default router;