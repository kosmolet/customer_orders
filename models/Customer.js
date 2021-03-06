const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  ssn: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  phone: { type: String, require: true },
  address: { type: String, require: true },
  city: { type: String, require: true },
  country: { type: String, require: true },
  postcode: { type: String, require: true },
  orders: [{ type: Types.ObjectId, ref: "Order" }],
});

module.exports = model("Customer", schema);
