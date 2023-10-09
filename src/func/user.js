import { User, Cart } from '../models/index.js';
import { createCart } from './cart.js';
export const createUser = async (id, nama, saldo, alamat, nomor_hp, email, password) => {
    let user = await User.create({
        id,
        nama,
        saldo,
        alamat,
        nomor_hp,
        email,
        password
    });
    let cart = await createCart(user.id);
    await user.update({ CartId: cart.id }, { where: { id: user.id } });
    return user;
};

export const getAll = async () => {
    return await User.findAll({
        attributes: ['id', 'nama', 'saldo', 'alamat', 'nomor_hp', 'email']
    });
};

export const getById = async (id) => {
    return await User.findOne({
        where: { id },
        attributes: ['nama', 'saldo', 'alamat', 'nomor_hp', 'email']
    });
};
export const updated = async (id, obj) => {
    return await User.update(obj, { where: { id: id } });
};

export const deleted = async (id) => {
    await Cart.destroy({ where: { UserId: id } });
    return await User.destroy({ where: { id: id } });
};
