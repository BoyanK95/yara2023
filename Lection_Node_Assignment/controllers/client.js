const Client = require('../models/client')

exports.getClient = (req, res, next) => {
    Client.findAll()
        .then((clients) => {
            res.render('admin/clients', {
                data: clients,
                pageTitle: 'Clients',
                path: '/admin/clients',
                isAuthenticated: req.isLoggedIn
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
        editing: false,
        isAuthenticated: req.isLoggedIn
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

exports.getEditClient = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const clientId = req.params.clientId;
    console.log(clientId);
    Client.findByPk(clientId)
        .then((client) => {
            if (!client) {
                return res.redirect('/');
            }
            res.render('admin/edit-client', {
                pageTitle: 'Edit Client',
                path: '/admin/edit-client',
                editing: editMode,
                client: client
            });
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
};

exports.postEditClient = (req, res, next) => {
    const clientId = req.body.clientId;
    const updatedClientName = req.body.clientName;
    const updatedEmail = req.body.email;
    const updatedCountry = req.body.country;
    const updatedCountryCode = req.body.countryCode;
    const updatedCity = req.body.city;
    const updatedPostlCode = req.body.postal_code;
    const phoneNumber = req.body.phone_number;
    const updatedNumberOfOrders = req.body.number_of_orders;
    const updatedAddress = req.body.address;
    Client.findByPk(clientId)
        .then((client) => {
            client.client_name = updatedClientName;
            client.email = updatedEmail
            client.country = updatedCountry
            client.countryCode = updatedCountryCode
            client.city = updatedCity
            client.postal_code = updatedPostlCode
            client.address = updatedAddress;
            client.phone_number = phoneNumber;
            client.number_of_orders = updatedNumberOfOrders;
            return client.save();
        })
        .then((result) => {
            console.log('CLIENT UPDATED!!!');
            res.redirect('/admin/clients');
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postDeleteClient = (req, res, next) => {
    const clientId = req.body.clientId;
    Client.findByPk(clientId)
        .then((client) => {
          return client.destroy()
        })
        .then(result => {
          console.log('CLIENT REMOVED !!!');
          res.redirect('/admin/clients');
        })
        .catch(err => console.log(err));
};