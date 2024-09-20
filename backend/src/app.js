const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const globalErrorHandler = require("./controllers/errorController");

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/about", aboutRoutes);

app.use(globalErrorHandler);

module.exports = app;
