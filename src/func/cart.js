import { Cart } from '../models/index.js';

export const createCart = async (ids) => {
    let _arr = Math.random().toString(36).substring(3).toUpperCase().split('');
    let x = Math.floor((_arr.reduce((a, b) => a + b.charCodeAt(), 0) % Math.pow(new Date().getMinutes(), Math.PI)) - Math.pow(Math.random(), Math.random()) - new Date().getMilliseconds());
    let id = `CRT-${Math.abs(x === NaN ? Math.random().toString(36).substring(3).toUpperCase() : x) + Math.random().toString(36).substring(3).toUpperCase()}`;
    return await Cart.create({ id: id, UserId: ids });
};

export const updateCart = async (id, obj) => {
    let user = await Cart.findOne({ where: { UserId: id } });
    if (user) return await Cart.update(obj, { where: { UserId: id } });
    return await Cart.update(obj, { where: { id: id } });
};

export const getCartById = async (id) => {
    let ids = await Cart.findOne({ where: { id: id } });
    if (ids) return ids;
    return await Cart.findOne({
        where: { UserId: id }
    });
};
