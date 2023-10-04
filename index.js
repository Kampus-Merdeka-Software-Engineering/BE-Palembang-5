import express from 'express';
import bodyParser from 'body-parser';
import productsRouter from './src/routes/products.js';
import usersRoutes from './src/routes/user.js';
import cartRoutes from './src/routes/cart.js';
import { startSequelize } from './src/utils/sql_start.js';
import sqls from './src/config/sequelize.js';

const app = express();
const port = 8080;

// const dbName = "highschool_development";
// const dbUsername = "root";
// const dbPassword = "root";
// const dbHost = "localhost";
// const dbPort = 3306;
// const dbDialect = "mysql";

// const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
//   host: dbHost,
//   port: dbPort,
//   dialect: dbDialect,
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection to database successful!");
//   })
//   .catch((e) => {
//     console.log("Connection to database failed!", e);
//   });
startSequelize();

sqls.sync({ alter: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/products', productsRouter);
app.use('/users', usersRoutes);
app.use('/cart', cartRoutes);

app.listen(port, () => {
    console.log(`Server Berjalan di port ${port}`);
});
