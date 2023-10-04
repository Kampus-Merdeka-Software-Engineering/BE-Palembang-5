import { createUser, getAll, getById, updated, deleted } from './../func/user.js';

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns json object
 */

export const make = async (req, res) => {
    let body = req.body;
    let user = await createUser(body.nama, body.alamat, body.nomor_hp, body.email);

    return user ? res.status(201).json({ message: 'User created successfully' }) : res.status(500).json({ message: 'Error creating user' });
};

export const updateUser = async (req, res) => {
    let body = req.body;
    let id = req.query.id;
    let user = await getById(id);
    if (!user) return res.status(404).json({ message: 'User Not Found' });
    let obj = {},
        msg = '';
    if (typeof body === 'object') {
        Object.entries(body).forEach(([k, v]) => {
            if (v === undefined || v === null) obj[k] = user[k];
            if (v) obj[k] = v;
        });
    }
    try {
        await updated(id, obj);
    } catch (err) {
        msg += err;
    }
    return msg.length > 0 ? res.status(500).json({ message: msg }) : res.status(201).json({ message: 'Updated!!' });
};

export const deleteUser = async (req, res) => {
    let id = req.query.id,
        msg = '';

    try {
        await deleted(id);
    } catch (err) {
        msg += err;
    }
    return msg.length > 0 ? res.status(500).json({ message: msg }) : res.status(200).json({ message: 'Deleted!!' });
};

export const getAllUsers = async (req, res) => {
    let found = await getAll();
    return found ? res.status(200).json({ data: found }) : res.status(200).json({ data: [] });
};

export const findById = async (req, res) => {
    let found = await getById(req.params.id);
    return found ? res.status(200).json({ data: found }) : res.status(404).json({ message: 'Not Found' });
};
