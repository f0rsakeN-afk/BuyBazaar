const catchAsync = require("../utils/catchAsync");
const About = require("../models/aboutSchema");

exports.getAboutData = catchAsync(async (req, res, next) => {
  const aboutData = await About.find();
  res.status(200).json({
    status: "success",
    aboutData,
  });
});
