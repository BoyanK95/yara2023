const Client = require('../models/client')

exports.getClient = (req, res, next) => {
    Client.findAll()
        .then((clients) => {
            res.render('admin/clients', {
                data: clients,
                pageTitle: 'Clients',
                path: '/admin/clients'
            });
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
};


exports.getAddClient = (req, res, next) => {
    res.render('admin/edit-client', {
        pageTitle: 'Add Client',
        path: '/admin/add-client',
        editing: false
    });
};

exports.postAddClient = (req, res, next) => {
    const supplierName = req.body.supplierName;
    const email = req.body.email;
    const country = req.body.country;
    const countryCode = req.body.countryCode;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    Client.create({
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
// exports.postDeleteProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     Client.findByPk(prodId)
//         .then((product) => {
//           return product.destroy()
//         })
//         .then(result => {
//           console.log('PRODUCT DESTROYED !!!');
//           res.redirect('/admin/clients');
//         })
//         .catch(err => console.log(err));
// };