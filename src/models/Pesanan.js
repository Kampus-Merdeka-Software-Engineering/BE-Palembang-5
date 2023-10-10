import { DataTypes } from 'sequelize';
import sqls from '../config/sequelize.js';

const Pesanan = sqls.define('Pesanan', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.JSON,
        allowNull: false
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

export default Pesanan;
