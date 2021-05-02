const express = require('express');
const router = express.Router();

const { getCustomers, getCustomer, postCustomer, getOrders } = require('../controllers/customer');

router.post('/', postCustomer);
router.get('/', getCustomers);
router.get('/:customerId', getCustomer);
router.get('/:customerId/orders', getOrders);

module.exports = router;