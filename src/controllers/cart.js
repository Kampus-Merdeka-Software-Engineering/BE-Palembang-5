import { getCartById, updateCart } from '../func/cart.js';
import { findById } from '../func/product.js';

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns json object
 */
export const getCartId = (req, res) => {
    let found = getCartById(req.params.id);

    return found ? res.status(200).json({ data: found }) : res.status(404).json({ message: 'Cart not found' });
};
export const getProductInCart = async (req, res) => {
    let cart = await getCartById(req.params.id);
    let product = cart.product_id.split('');
    let allProduct = [];
    await product.map((el) => {
        let p = getById(el.id);
        allProduct.push(p);
    });

    return product ? res.status(200).json({ data: allProduct }) : res.status(200).json({ data: [] });
};
export const addProductToCart = async (req, res) => {
    let cart = await getCartById(req.query.id);
    let product = req.query.product.split(',');
    let obj = {},
        arr = [];
    let fail = false;
    for (let index = 0; index < product.length; index++) {
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
        console.log(obj);
        success = await updateCart(req.query.id, obj);
    } catch (err) {
        console.log('error disini', err);
        fail = true;
    }
    return !fail && success ? res.status(201).json({ message: 'Successfuly add product' }) : res.status(500).json({ message: 'Something gone error' });
};
