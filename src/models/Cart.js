import { DataTypes } from 'sequelize';
import sqls from '../config/sequelize.js';
import User from './User.js';

const Cart = sqls.define('Cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.STRING
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
