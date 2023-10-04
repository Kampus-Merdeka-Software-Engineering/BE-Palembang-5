import { Router } from 'express';
const cartRoutes = Router();

import { getCartById } from '../func/cart.js';

cartRoutes.get('/:id', getCartById);

export default cartRoutes;
