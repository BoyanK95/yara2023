const express = require('express');
/** Requiring All Variables */
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')

const errorController = require('./controllers/error');

const app = express();

/** Seting views format */
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/** Seting Routes */
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);


/** Seting sequelize with sync() */
sequelize.sync().then(result => {
    // console.log(result);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})

