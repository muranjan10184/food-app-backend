const mongoose = require("mongoose");
const order = require("./order");

const Customer = new mongoose.Schema({
  customerId: { type: Number },
  name: { type: String },
  customerType: { type: String }
});

module.exports = mongoose.model("Customer", Customer);
