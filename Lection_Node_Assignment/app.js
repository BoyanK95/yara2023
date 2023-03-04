const express = require('express');
/** Requiring All Module Variables */
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

/** Setting views format */
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/** Middle-ware for passing user through requests*/
app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next()
        })
        .catch(err => console.log(err))
})

/** Setting Routes */
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

/** Setting up relations between tables */
Product.belongsTo(User, { constraints: true, foreignKey: 'user_id' });
User.hasMany(Product);
Product.hasMany(Order, { foreignKey: 'product_id' });
Client.hasMany(Order, { foreignKey: 'client_id' });
Supplier.hasMany(Order, { foreignKey: 'supplier_id' });
Order.belongsTo(Product, { foreignKey: 'product_id' });
Order.belongsTo(Client, { foreignKey: 'client_id' });
Order.belongsTo(Supplier, { foreignKey: 'supplier_id' });
Order.hasOne(Invoice, { foreignKey: 'order_id' });
Product.belongsToMany(Storage, { through: StorageProduct });
Storage.belongsToMany(Product, { through: StorageProduct });

/** Setting sequelize with sync() */
sequelize
    .sync()
    .then((result) => {
        return User.findByPk(1);
    })
    .then((user) => {
        if (!user) {
            return User.create({
                name: 'Boyan',
                email: 'boyan95@abv.bg',
                password: 'password123',
                identification: (Math.random() * 1000).toString(), //Generated: 171.06528593286296
                rights: 'Admin'
            });
        }
        return user
    })
    .then((user) => {
        // console.log(user);
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
