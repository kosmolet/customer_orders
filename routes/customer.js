const express = require('express');
const router = express.Router();

const { getCustomers, getCustomer, postCustomer } = require('../controllers/customer');

router.get('/', getCustomers);
router.get('/:customerId', getCustomer);
router.post('/', postCustomer);
module.exports = router;