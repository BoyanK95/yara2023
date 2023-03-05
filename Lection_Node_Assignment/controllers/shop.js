const Product = require('../models/product');
const Cart = require('../models/cart');
const db = require('../util/database');

exports.getProducts = (req, res, next) => {
    Product.findAll()
        .then((products) => {
            res.render('shop/product-list', {
                prods: products,
                pageTitle: 'All Products',
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    Product.findByPk(prodId)
        .then((product) => {
            res.render('shop/product-detail', {
                product: product,
                pageTitle: product.product_name,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
};

exports.getIndex = (req, res, next) => {
    Product.findAll()
        .then((products) => {
            res.render('shop/index', {
                prods: products,
                pageTitle: 'Shop',
                path: '/'
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getCart = (req, res, next) => {
    req.user
        .getCart()
        .then((cart) => {
            return cart
                .getProducts()
                .then((products) => {
                    res.render('shop/cart', {
                        path: '/cart',
                        pageTitle: 'Your Cart',
                        products: products
                    });
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    debugger
    console.log(prodId);
    let fetchedCart;
    /** Getign Cart */
    req.user
        .getCart()
        .then((cart) => {
            fetchedCart = cart;
            /** Returning productArr with prodId from Cart */
            return cart.getProducts({ where: { product_id: Number(prodId) } });
        })
        .then((products) => {
            let product;
            if (products.length > 0) {
                product = products[0];
            }
            let newQty = 1;
            if (product) {
                //...
            }
            return Product.findByPk(prodId)
                .then((product) => {
                    return fetchedCart.addProduct(product, { through: { quantity: newQty } });
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.deleteProduct(prodId, product.price);
        res.redirect('/cart');
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};
