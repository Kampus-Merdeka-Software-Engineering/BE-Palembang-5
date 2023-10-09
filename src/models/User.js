import { DataTypes } from 'sequelize';
import sqls from '../config/sequelize.js';

const User = sqls.define(
    'User',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        },
        saldo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        alamat: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        nomor_hp: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return '*********';
            }
        }
    },
    {
        timestamps: true
    },
    {
        defaultScope: {
            attributes: {
                include: ['password']
            }
        }
    }
);

export default User;
