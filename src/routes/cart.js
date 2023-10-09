import { Router } from 'express';
const cartRoutes = Router();

import { getCartById } from '../func/cart.js';
import { addProductToCart } from '../controllers/cart.js';

// cartRoutes.get('/:id', getCartById);
cartRoutes.post('/', addProductToCart);

export default cartRoutes;
