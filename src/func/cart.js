import { Cart } from '../models/index.js';

export const createCart = async (id) => {
    return await Cart.create({ UserId: id });
};

export const getCartById = async (id) => {
    return await Cart.findOne({
        where: { id_user: id }
    });
};
