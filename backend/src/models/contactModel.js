const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "An username is required"],
  },
  email: {
    type: String,
    required: [true, "An email is required"],
    validate: {
      validator: [validator.isEmail],
      message: "Please provide a valid email address",
    },
  },
  message: {
    type: String,
    required: [true, "A message is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const ContactForm = mongoose.model("contact", contactSchema);

module.exports = ContactForm;
