const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const clientController = require('../controllers/client')
const supplierController = require('../controllers/supplier')

const router = express.Router();
//Get products/add products, get edit products
router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);

//Get clients/suppliers routes
router.get('/clients', clientController.getClient)
router.get('/suppliers', supplierController.getSupplier)
router.get('/add-client', clientController.getAddClient);
router.get('/add-supplier', supplierController.getAddSupplier);

//Get edit product/supplier/client
router.get('/edit-product/:productId', adminController.getEditProduct);
router.get('/edit-supplier/:supplierId', supplierController.getEditSupplier);
router.get('/edit-client/:clientId', clientController.getEditClient);

//POST/ADD =>  admin/add-product/supplier/client
router.post('/add-product', adminController.postAddProduct);
router.post('/add-supplier', supplierController.postAddSupplier);
router.post('/add-client', clientController.postAddClient);

// EDIT => /admin/edit-product/client/supplier
router.post('/edit-product', adminController.postEditProduct);
router.post('/edit-client', clientController.postEditClient);

//Deleting products
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
