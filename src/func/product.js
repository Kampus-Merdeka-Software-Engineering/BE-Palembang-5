import { Product } from '../models/index.js';

export const createProduct = async (id, name, price, diskon, category, description, image) => {
    return await Product.create({
        id,
        name,
        price,
        diskon,
        category,
        description,
        image
    });
};

export const findAll = async () => {
    return await Product.findAll({
        attributes: ['id', 'name', 'price', 'diskon', 'category', 'description', 'image']
    });
};

export const findById = async (id) => {
    console.log(id);
    return await Product.findOne({
        where: { id: id },
        attributes: ['id', 'name', 'price', 'diskon', 'category', 'description', 'image']
    });
};

export const findByCategory = async (category) => {
    return await Product.findAll({
        where: { category: category },
        attributes: ['id', 'name', 'price', 'diskon', 'category', 'description', 'image']
    });
};

export const findByName = async (name) => {
    let reg = new RegExp(name, 'ig');
    let all = await Product.findAll();
    let founded = [];
    all.map((el) => {
        if (reg.test(el.name)) founded.push({ id: el.id, name: el.name, price: el.price, diskon: el.diskon, category: el.category, description: el.description, image: el.image });
    });

    return founded;
};

export const update = async (id, obj) => {
    return await Product.update(obj, { where: { id: id } });
};

export const deleted = async (id) => {
    return await Product.destroy({ where: { id: id } });
};
