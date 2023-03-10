const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
        isAuthenticated: req.isLoggedIn
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    Product.create({
        product_name: title,
        price: price,
        imageurl: imageUrl,
        description: description,
        user_id: req.user.user_id
    })
        .then((result) => {
            console.log('Created Product');
            res.redirect('/admin/products');
        })
        .catch((err) => {
            console.log(`Unsuccessful request for creating a product! Error: ${err}`);
        });
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findByPk(prodId)
        .then((product) => {
            if (!product) {
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                editing: editMode,
                product: product,
                isAuthenticated: req.isLoggedIn
            });
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    Product.findByPk(prodId)
        .then((product) => {
            product.product_name = updatedTitle;
            product.price = updatedPrice;
            product.description = updatedDesc;
            product.imageurl = updatedImageUrl;
            return product.save();
        })
        .then((result) => {
            console.log('PRODUCT UPDATED !!!' + result);
            res.json(result)
            res.redirect('/admin/products');
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getProducts = (req, res, next) => {
    const isLoggedIn = req.session.isLoggedIn

    Product.findAll()
        .then((products) => {
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products',
                isAuthenticated: isLoggedIn
            });
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findByPk(prodId)
        .then((product) => {
          return product.destroy()
        })
        .then(result => {
          console.log('PRODUCT DESTROYED !!!');
          res.redirect('/admin/products');
        })
        .catch(err => console.log(err));
};
