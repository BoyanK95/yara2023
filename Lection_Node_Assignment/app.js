const express = require('express');
/** Requiring All Dep */
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const session = require('express-session')

const Product = require('./models/product');
const Client = require('./models/client');
const Order = require('./models/order');
const Storage = require('./models/storage');
const StorageProduct = require('./models/storageProduct');
const Supplier = require('./models/suplier');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Invoice = require('./models/invoice');

const errorController = require('./controllers/error');

const app = express();

/** Setting views format */
app.set('view engine', 'ejs');
app.set('views', 'views');

/** Setting routes to constants */
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
/** Creating session with pg and express-session */
app.use(session({secret: 'my-secret-code', resave: false, saveUninitialized: false, cookie: { maxAge: 600000 }}))

/** WHY DOESNT THIS WORK ??? */
// app.use(session({
//     store: new (require('connect-pg-simple')(session))({
//       // Insert connect-pg-simple options here
//     }),
//     secret: process.env.FOO_COOKIE_SECRET,
//     resave: false,
//     cookie: { maxAge: 10 * 60 * 1000 }, // 10 minutes
//     // Insert express-session options here
//   }));

/** Middle-ware for passing user through requests*/
app.use((req, res, next) => {
    User.findByPk(1)
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((err) => console.log(err));
});

/** Setting Routes */
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

/** Setting up relations between tables */
Product.belongsTo(User, { constraints: true, foreignKey: 'user_id' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
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
    // .sync({force: true})
    .sync()
    //Creating admin user (name: Boyan) with PK = 1 
    .then((result) => {
        return User.findByPk(1);
    })
    .then((user) => {
        if (!user) {
            return User.create({
                name: 'Boyan',
                email: 'boyan95@abv.bg',
                password: 'password123',
                identification: (Math.random() * 1000).toString(), //Generated: 856.1519576783945
                rights: 'Admin'
            });
        }
        return user;
    })
    .then((user) => {
        // Creating Cart for user Boyan
        return user.createCart()
    })
    .then(cart => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
