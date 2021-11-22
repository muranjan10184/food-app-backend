const mongoose = require("mongoose");

const Order = new mongoose.Schema({
  customerName: { type: Number },
  customerID: { type: String },
  restaurantID: { type: String },
  dishId: { type: Number },
  amountPaid: { type: Number },
  status: { type: String },
});

module.exports = mongoose.model("Order", Order);
