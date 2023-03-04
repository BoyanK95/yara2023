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