const { Schema, model, Types } = require("mongoose");

const schema = new Schema({

  orderType: { type: String, required: true },
  countryCode: { type: String, required: true,  default: "SE" },
  store: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  paymentStatus: { type: String, required: true },
  amount: { type: Number, required: true },
  flagged: { type: Boolean, required: true, default: false },
  created: { type: Date, default: Date.now },
  customer: { type: Types.ObjectId, ref: "Customer" },

});

module.exports = model("Order", schema);
