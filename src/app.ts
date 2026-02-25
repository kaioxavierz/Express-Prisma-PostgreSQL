import express, {Request, Response} from "express";
import { router as userRoutes } from "./routes/userRouter";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

export default app;