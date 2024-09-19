const catchAsync = require("../utils/catchAsync");
const ContactForm = require("../models/contactModel");

exports.sendMessage = catchAsync(async (req, res, next) => {
  console.log("Received a message request");
  const newMessage = await ContactForm.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  res.status(201).json({
    status: "success",
    data: {
      newMessage,
    },
  });
});

exports.getMessage = catchAsync(async (req, res, next) => {
  res.status(200).json({
    message: "got message",
  });
});
