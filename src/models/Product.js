import { DataTypes } from 'sequelize';
import sqls from '../config/sequelize.js';
import Cart from './Cart.js';

const Product = sqls.define(
    'Product',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: true
    }
);

Cart.hasMany(Product);

export default Product;
