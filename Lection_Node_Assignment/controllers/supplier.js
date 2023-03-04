const Supplier = require('../models/suplier')

exports.getSupplier = (req, res, next) => {
    Supplier.findAll()
        .then((supliers) => {
            res.render('admin/suppliers', {
                data: supliers,
                pageTitle: 'Suppliers',
                path: '/admin/suppliers'
            });
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
};