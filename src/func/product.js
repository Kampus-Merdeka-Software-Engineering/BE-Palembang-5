import { Product } from '../models/index.js';

export const createProduct = async (name, price, category, description, image) => {
    return await Product.create({
        name,
        price,
        category,
        description,
        image
    });
};

export const findAll = async () => {
    return Product.findAll({
        attributes: ['name', 'price', 'category', 'description', 'image']
    });
};

export const findById = async (id) => {
    return await Product.findOne({
        where: { id: id },
        attributes: ['name', 'price', 'category', 'description', 'image']
    });
};

export const findByCategory = async (category) => {
    return await Product.findOne({
        where: { category: category },
        attributes: ['name', 'price', 'category', 'description', 'image']
    });
};

export const findByName = async (name) => {
    let reg = new RegExp(name, 'ig');
    let all = await Product.findAll();
    let founded = '';
    all.map((el) => {
        if (reg.test(el.name)) founded += el.name;
    });

    return await Product.findOne({
        where: { name: founded },
        attributes: ['name', 'price', 'category', 'description', 'image']
    });
};

export const update = async (id, obj) => {
    return await Product.update(obj, { where: { id: id } });
};

export const deleted = async (id) => {
    return await Product.destroy({ where: { id: id } });
};
