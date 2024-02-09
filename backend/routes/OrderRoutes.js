const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');
router.post('/orderData',orderController.set_Orders)
router.post('/myOrder',orderController.get_Orders)


module.exports = router;