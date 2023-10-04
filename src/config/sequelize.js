import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

/**
 * @constructor dotenv
 * @method config()
 * @returns environment in file .env
 */
dotenv.config();

/**
 * @object Sequelize
 * @returns sql connection
 */
const sqls = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
});

export default sqls;
