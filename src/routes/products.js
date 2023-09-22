import { Router } from "express";
import { getAll, getById } from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", getAll);
productsRouter.get("/:id", getById);

export default productsRouter;
