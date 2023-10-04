import sqls from '../config/sequelize.js';
import '../models/index.js';

export const startSequelize = async () => {
    await sqls.authenticate();
    console.log('connected to database');
};
