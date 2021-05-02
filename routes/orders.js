const express = require('express');
const router = express.Router();

const { getOrders, getOrder, postOrder } = require('../controllers/orders');

router.get('/', getOrders);
router.get('/:orderId', getOrder);
router.post('/', postOrder);
module.exports = router;
