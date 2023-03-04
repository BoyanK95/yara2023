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
    const clientName = req.body.clientName;
    const email = req.body.email;
    const country = req.body.country;
    const countryCode = req.body.countryCode;
    const city = req.body.city;
    const postal_code = req.body.postal_code;
    const phone_number = req.body.phone_number;
    const number_of_orders = req.body.number_of_orders;
    const address = req.body.address;
    Client.create({
        client_name: clientName,
        phone_number: phone_number,
        email: email,
        country: country,
        countryCode: countryCode,
        postal_code: postal_code,
        number_of_orders: number_of_orders,
        city: city,
        address: address,
        user_id: req.user.user_id
    })
        .then((result) => {
            console.log('Registered Client!');
            res.redirect('/admin/clients');
        })
        .catch((err) => {
            console.log(`Unsuccessful request for registering client! Error: ${err}`);
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