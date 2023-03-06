const Supplier = require('../models/suplier')

exports.getSupplier = (req, res, next) => {
    Supplier.findAll()
        .then((supliers) => {
            res.render('admin/suppliers', {
                data: supliers,
                pageTitle: 'Suppliers',
                path: '/admin/suppliers',
                isAuthenticated: req.isLoggedIn
            });
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
};

exports.getAddSupplier = (req, res, next) => {
    res.render('admin/edit-supplier', {
        pageTitle: 'Add Supplier',
        path: '/admin/add-supplier',
        editing: false,
        isAuthenticated: req.isLoggedIn
    });
};

exports.postAddSupplier = (req, res, next) => {
    const supplierName = req.body.supplierName;
    const email = req.body.email;
    const country = req.body.country;
    const countryCode = req.body.countryCode;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    Supplier.create({
        supplier_name: supplierName,
        phone_number: phoneNumber,
        email: email,
        country: country,
        countryCode: countryCode,
        address: address,
        user_id: req.user.user_id
    })
        .then((result) => {
            console.log('Registered Supplier!');
            res.redirect('/admin/suppliers');
        })
        .catch((err) => {
            console.log(`Unsuccessful request for registering supplier! Error: ${err}`);
        });
};

exports.getEditSupplier = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const supplierId = req.params.supplierId;
    console.log(supplierId);
    Supplier.findByPk(supplierId)
        .then((supplier) => {
            if (!supplier) {
                return res.redirect('/');
            }
            res.render('admin/edit-supplier', {
                pageTitle: 'Edit Supplier',
                path: '/admin/edit-supplier',
                editing: editMode,
                supplier: supplier,
                isAuthenticated: req.isLoggedIn
            });
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
};

exports.postEditSupplier = (req, res, next) => {
    const supplierId = req.body.supplierId;
    const updatedSupplierName = req.body.supplierName;
    const updatedEmail = req.body.email;
    const updatedCountry = req.body.country;
    const updatedCountryCode = req.body.countryCode;
    const updatedCity = req.body.city;
    const updatedPostlCode = req.body.postal_code;
    const phoneNumber = req.body.phoneNumber;
    const updatedAddress = req.body.address;
    Supplier.findByPk(supplierId)
        .then((supplier) => {
            supplier.supplier_name = updatedSupplierName;
            supplier.email = updatedEmail
            supplier.country = updatedCountry
            supplier.countryCode = updatedCountryCode
            supplier.city = updatedCity
            supplier.postal_code = updatedPostlCode
            supplier.address = updatedAddress;
            supplier.phone_number = phoneNumber;
            return supplier.save();
        })
        .then((result) => {
            console.log('SUPPLIER UPDATED!!!');
            res.redirect('/admin/suppliers');
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postDeleteSupplier = (req, res, next) => {
    const supId = req.body.supplierId;
    Supplier.findByPk(supId)
        .then((supplier) => {
          return supplier.destroy()
        })
        .then(result => {
          console.log('SUPPLIER REMOVED !!!');
          res.redirect('/admin/suppliers');
        })
        .catch(err => console.log(err));
};