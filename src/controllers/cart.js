import { getCartById, updateCart } from '../func/cart.js';
import { findById } from '../func/product.js';

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns json object
 */

export const getProductInCart = async (req, res) => {
    let cart = await getCartById(req.query.id);
    return cart ? res.status(200).json({ data: cart.dataValues.product }) : res.status(200).json({ data: [] });
};
export const getCartId = async (req, res) => {
    let found = await getCartById(req.query.getCartId);
    return found ? res.status(200).json({ data: found }) : res.status(404).json({ message: 'Cart not found' });
};
export const addProductToCart = async (req, res) => {
    let cart = await getCartById(req.query.id);
    let product = req.query.product.split(',');
    let obj = {},
        arr = [];
    let fail = false;
    if (cart.dataValues.product) cart.dataValues.product.map((el) => arr.push(el));
    for (let index = arr.length; index < product.length; index++) {
        let hasil = await findById(product[index]);
        arr[index] = hasil.dataValues;
    }
    if (product.length > 1) {
        Object.entries(cart.dataValues).forEach(([k, v]) => {
            if (k === 'product') obj[k] = arr;
            if (k !== 'product') obj[k] = cart[k];
        });
    }
    if (product.length === 1) {
        arr.push(await findById(product[0]));
        obj['product'] = arr;
    }
    let success;
    try {
        success = await updateCart(req.query.id, obj);
    } catch (err) {
        fail = true;
    }
    return !fail && success ? res.status(201).json({ message: 'Successfully add product' }) : res.status(500).json({ message: 'Something went error' });
};
