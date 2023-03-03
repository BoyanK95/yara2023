const express = require('express');
/** Requiring All Variables */
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const Product = require('./models/product');
const Client = require('./models/client');
const Order = require('./models/order');
const Storage = require('./models/storage');
const StorageProduct = require('./models/storageProduct');
const Supplier = require('./models/suplier');
const User = require('./models/user');
const Invoice = require('./models/invoice');

const errorController = require('./controllers/error');

const app = express();

/** Seting views format */
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/** Seting Routes */
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

/** Seting up relations between tables */
Product.belongsTo(User, { constraints: true, foreignKey: 'user_id'})
User.hasMany(Product)
Product.hasMany(Order, { foreignKey: 'product_id' });
Client.hasMany(Order, { foreignKey: 'client_id' });
Supplier.hasMany(Order, { foreignKey: 'supplier_id' });
Order.belongsTo(Product, { foreignKey: 'product_id' });
Order.belongsTo(Client, { foreignKey: 'client_id' });
Order.belongsTo(Supplier, { foreignKey: 'supplier_id' });
Order.hasOne(Invoice, { foreignKey: 'order_id' });
Product.belongsToMany(Storage, StorageProduct, { through: 'product_storage', foreignKey: 'product_id' });
Storage.belongsToMany(Product, StorageProduct, { through: 'product_storage', foreignKey: 'storage_id' });

/** Seting sequelize with sync() */
sequelize
    .sync()
    .then((result) => {
        // console.log(result);
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
