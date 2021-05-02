const Customer = require("../models/Customer");
const Order = require("../models/Order");

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (order) {
      res.status(200).json({
        success: true,
        order,
      });
    } else {
      return res.status(400).json({
        error: "Order does not exist",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.postOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    const customer = await Customer.findById({ _id: order.customer });
    if (!customer) {
      res
        .status(404)
        .json({ message: 'customer: should contain ID of existing customer' });
    }
    customer.orders.push(order);
    await customer.save();
    return res.status(201).send({ success: true, data: order });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
