import { Router } from 'express';
const cartRoutes = Router();

import { addProductToCart, getCartId, getProductInCart } from '../controllers/cart.js';

cartRoutes.get('/product', getProductInCart);
cartRoutes.post('/', addProductToCart);
cartRoutes.get('/', getCartId);

export default cartRoutes;
