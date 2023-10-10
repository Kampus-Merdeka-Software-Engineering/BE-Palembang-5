import { Pesanan } from './../models/index.js';

export const createPesanan = async (product, user, total, verif) => {
    let id = `PSN-${
        Math.floor((_arr.reduce((a, b) => a + b, 0) % Math.pow(new Date().getMinutes(), Math.PI)) - Math.pow(Math.random(), Math.random()) - new Date().getMilliseconds()) +
        Math.random().toString(36).substring(3).toUpperCase()
    }`;
    return await Pesanan.create({ id, product, user, total, verif });
};

export const findPesananById = async (id) => {
    return await Pesanan.findOne({ where: { id: id }, attributes: ['id', 'product_id', 'user_id', 'verified'] });
};
