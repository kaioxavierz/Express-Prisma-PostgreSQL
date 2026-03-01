import "dotenv/config";

import express, {Request, Response} from "express";
import { router as userRoutes } from "./routes/userRouter";
import { router as productRoutes } from "./routes/productRouter";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API rodando 🚀" });
});

app.use("/users", userRoutes);
//app.use("/products", productRoutes);

app.use(errorHandler);

export default app;