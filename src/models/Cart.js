import { DataTypes } from 'sequelize';
import sqls from '../config/sequelize.js';
import User from './User.js';

const Cart = sqls.define('Cart', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    product: {
        type: DataTypes.JSON,
        allowNull: true
    },
    tgl_transaksi: {
        type: DataTypes.DATE
    },
    tgl_pengiriman: {
        type: DataTypes.DATE
    }
});

User.hasOne(Cart);

Cart.belongsTo(User);

export default Cart;
