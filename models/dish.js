const mongoose = require("mongoose");

const Dish = new mongoose.Schema({
  dishId: { type: Number },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  offer: { type: Number },
  image: { type: String },
});

module.exports = mongoose.model("Dish", Dish);
