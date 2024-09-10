const AppError = require("../utils/appError");

const sendErrorDev = (err, res) => {
  let error = { ...err };
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
  } else {
    res.status(500).json({
      status: "fail",
      message: "Something went very wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.status = err.status || "fail";
  err.statusCode = err.statusCode || 500;
  if (process.env.NODE_ENV === "production") {
    sendErrorProd(err, res);
  } else if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  }
};
