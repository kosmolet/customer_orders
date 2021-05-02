const Customer = require('../models/Customer');
const Order = require('../models/Order');

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
        error: 'Order does not exist',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.getOrders = async (req, res) => {
    try {
      const orders = await Order.find();
      if (orders) {
        res.status(200).json({
          success: true,
          orders,
        });
      } else {
        return res.status(400).json({
          error: 'Orders do not exist',
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  };


 exports.postOrder = ( async (req, res) => {
   
    try {
      const orders = new Order(req.body);
      await orders.save();
      return res.status(201).send(orders);
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  });