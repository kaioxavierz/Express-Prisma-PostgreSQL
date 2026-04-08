import "dotenv/config";

import express, {Request, Response} from "express";
import helmet from "helmet";
import { router as userRoutes } from "./routes/userRouter";
import { router as productRoutes } from "./routes/productRouter";
import { router as baseRoutes } from "./routes/baseRouter";
import { router as userBaseRelationRoutes } from "./routes/userBaseRelation";
import { router as inventoryRoutes } from "./routes/inventoryRouter";
import { router as tokenRoutes } from "./routes/tokenRouter";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API rodando 🚀" });
});

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/bases", baseRoutes);
app.use("/user-base-relations", userBaseRelationRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/token", tokenRoutes);
app.use(errorHandler);

export default app;