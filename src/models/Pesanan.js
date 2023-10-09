import { DataTypes } from 'sequelize';
import sqls from '../config/sequelize.js';

const Pesanan = sqls.define('Pesanan', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

export default Pesanan;
