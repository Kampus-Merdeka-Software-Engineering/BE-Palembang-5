import { createProduct, findAll, findById, findByCategory, findByName, update, deleted } from '../func/product.js';

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns json object
 */

export const make = async (req, res) => {
    /**
     * @var { name, price, category, description, image} seleksi variable ini yang ada di dalam request body
     */
    let { name, price, diskon, category, description, image } = req.body;
    if (!diskon) diskon = 0;
    let _arr = [];
    category.split('').map((el) => {
        _arr.push(el.charCodeAt());
    });

    let id = `PRD-${
        Math.abs(Math.floor((_arr.reduce((a, b) => a + b, 0) % Math.pow(new Date().getMinutes(), Math.PI)) - Math.pow(Math.random(), Math.random()) - new Date().getMilliseconds())) +
        Math.random().toString(36).substring(3).toUpperCase()
    }`;
    const product = await createProduct(id, name, price, diskon, category, description, image);
    return product ? res.status(201).json({ message: 'Product created successfully' }) : res.status(500).json({ message: 'Product not created' });
};

export const updateCategory = async (req, res) => {
    let body = req.body;
    let id = req.query.id;
    let products = await findById(id);
    if (!products) return res.status(404).json({ message: 'Product Not Found' });
    let obj = {},
        msg = '';

    if (typeof body === 'object') {
        Object.entries(body).forEach(([k, v]) => {
            if (v === undefined || v === null) obj[k] = products[k];
            if (v) obj[k] = v;
        });
    }
    try {
        await update(id, obj);
    } catch (err) {
        msg += err;
    }

    return msg.length > 0 ? res.status(500).json({ message: msg }) : res.status(201).json({ message: 'Updated!!' });
};

export const deleteProduct = async (req, res) => {
    let id = req.query.id,
        msg = '';
    let fn = await findById(id);
    if (!fn) return res.status(404).json({ message: 'Product Not Found' });
    try {
        await deleted(id);
    } catch (err) {
        msg += err;
    }
    return msg.length > 0 ? res.status(500).json({ message: msg }) : res.status(200).json({ message: 'Deleted!!' });
};

export const getById = async (req, res) => {
    let { id } = req.params;
    const found = await findById(id);
    return found ? res.status(200).json({ data: found }) : res.status(500).json({ message: 'Product not found' });
};

export const getAllProducts = async (req, res) => {
    let found = await findAll();
    if (req.query.category) {
        let category = await findByCategory(req.query.category);
        if (category === null) return res.status(404).json({ message: 'Category Not Found' });

        return category ? res.status(200).json({ data: category }) : res.status(404).json({ message: 'Not Found' });
    }
    if (req.query.name) {
        let name = await findByName(req.query.name);
        if (name === null) return res.status(404).json({ message: 'Name Not Found' });
        return name ? res.status(200).json({ data: name }) : res.status(404).json({ message: 'Not Found' });
    }
    return found ? res.status(200).json({ data: found }) : res.status(200).json({ data: [] });
};
