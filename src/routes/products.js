import { Router } from 'express';
import { getAllProducts, make, getById, updateCategory, deleteProduct } from '../controllers/product.js';
const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', getById);
productsRouter.post('/', make);
productsRouter.put('/', updateCategory);
productsRouter.delete('/', deleteProduct);

export default productsRouter;
