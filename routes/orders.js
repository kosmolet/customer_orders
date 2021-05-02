const express = require("express");
const router = express.Router();

const { getOrder, postOrder } = require("../controllers/orders");

router.post("/", postOrder);
router.get("/:orderId", getOrder);

module.exports = router;
