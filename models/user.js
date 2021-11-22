const mongoose = require("mongoose");

const User = new mongoose.Schema({
  userId: { type: String },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: { type: String },
});

module.exports = mongoose.model("User", User);
