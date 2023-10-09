import { Router } from 'express';
const pesanRoutes = Router();

import { findPesananById } from '../func/pesan.js';

pesanRoutes.get('/:id', findPesananById);

export default pesanRoutes;
