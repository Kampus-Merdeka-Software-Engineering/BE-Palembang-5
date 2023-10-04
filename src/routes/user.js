import { Router } from 'express';
import { getAllUsers, findById, make, updateUser, deleteUser } from '../controllers/user.js';

const usersRoutes = Router();

usersRoutes.get('/', getAllUsers);
usersRoutes.get('/:id', findById);
usersRoutes.post('/', make);
usersRoutes.put('/', updateUser);
usersRoutes.delete('/', deleteUser);

export default usersRoutes;
