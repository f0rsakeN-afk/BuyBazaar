const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your username"],
    min: [4, "Username must be at least 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email address"],
    validate: [validator.isEmail],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    min: [8, "Password must be at 8 characters"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "passwordConfirm is required"],
    validate: {
      validator: function (val) {
        return this.password === val;
      },
      message: "password must be same as passwordConfirm",
    },
  },
  photo: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
