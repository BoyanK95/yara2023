const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const clientController = require('../controllers/client')

const router = express.Router();
//Get products/add products, get edit products
router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);

//Get clients routes
router.get('/clients', clientController.getClient)

router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
router.post('/edit-product', adminController.postEditProduct);
//Deleting products
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
