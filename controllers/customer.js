const Customer = require('../models/Customer');

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId);
    if (customer) {
      res.status(200).json({
        success: true,
        customer,
      });
    } else {
      return res.status(400).json({
        error: 'Customer does not exist',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.getCustomers = async (req, res) => {
    try {
      const customers = await Customer.find();
      if (customers) {
        res.status(200).json({
          success: true,
          customers,
        });
      } else {
        return res.status(400).json({
          error: 'Customers do not exist',
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  };


 exports.postCustomer = ( async (req, res) => {
   
    try {
      const customer = new Customer(req.body);
      await customer.save();
      return res.status(201).send(customer);
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  });