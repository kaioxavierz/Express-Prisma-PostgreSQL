import "dotenv/config";

import express, {Request, Response} from "express";
import { router as userRoutes } from "./routes/userRouter";
import { router as productRoutes } from "./routes/productRouter";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
//app.use("/products", productRoutes);

export default app;