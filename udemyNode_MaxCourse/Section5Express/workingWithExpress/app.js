const express = require('express');

const path = require('path')

const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

/** Setting the templating-engine */
// const expressHbs = require('express-handlebars')
// app.engine('handlebars', expressHbs({}))

app.set('view engine', 'ejs')

/** Set if you use different name than views, congifuring  template path*/
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes)
app.use(shopRoutes)

/** Path to 404 - not deffined paths */
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
})

app.listen(3000);
