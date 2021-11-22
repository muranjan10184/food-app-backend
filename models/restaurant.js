const mongoose = require("mongoose");

const Restaurant = new mongoose.Schema({
  name: { type: Number },
  location: { type: String },
  restaurantID: { type: String },
  cuisineType: { type: String },
  opensAt: { Number },
});

module.exports = mongoose.model("Restaurant", Restaurant);
