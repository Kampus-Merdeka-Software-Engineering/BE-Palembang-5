import { getCartById } from '../func/cart.js';

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns json object
 */
export const getCartId = (req, res) => {
    let found = getCartById(req.params.id);

    /**
     * @returns {ternary} jika variable found ada isinya maka kembalikan object found
     */

    return found ? res.status(200).json({ data: found }) : res.status(404).json({ message: 'Cart not found' });
};
