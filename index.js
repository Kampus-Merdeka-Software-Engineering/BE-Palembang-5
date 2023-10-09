import express from 'express';
import bodyParser from 'body-parser';
import productsRouter from './src/routes/products.js';
import usersRoutes from './src/routes/user.js';
import cartRoutes from './src/routes/cart.js';
import pesanRoutes from './src/routes/order.js';
import { startSequelize } from './src/utils/sql_start.js';
import sqls from './src/config/sequelize.js';
import Logging from './src/lib/Logging.js';

const app = express();
const port = 8080;
const Logger = new Logging();
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
app.use((err, req, res, next) => {
    console.log(err, req);
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).json({ message: 'Bad JSON, check lagi sintax body JSON kamu' });
    }
    if (err.status === 404) {
        res.status(404).json({ message: 'Endpoint tidak ditemukan' });
    }
});

app.use((req, res, next) => {
    Logger.info(` Incoming Request -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        Logger.info(` Incoming Request Finish -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - StatusCode: [${res.statusCode}] - Status: [${res.statusMessage}]`);
    });
    next();
});

app.use(express.static('public'));

app.use('/products', productsRouter);
app.use('/users', usersRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', pesanRoutes);

app.listen(port, () => {
    console.log(`Server Berjalan di port ${port}`);
});
