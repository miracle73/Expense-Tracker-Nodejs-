const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "Please provide your full name"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  balance: {
    type: Number,
    required: [true, "Balance is required"],
    default: 0,
  },
});

const usersModel = mongoose.model("users", usersSchema);
module.exports = usersModel;
