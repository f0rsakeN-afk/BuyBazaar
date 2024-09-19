const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, "config.env") });

const PORT = process.env.PORT || 3000;
const DB = process.env.DB;
const PW = process.env.PW;

if (!DB || !PW) {
  console.error("Missing database configuration. Check your environment variables.");
  process.exit(1);
}

const DBURL = DB.replace("<db_password>", PW);

// Connect to database
mongoose
  .connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1);
  });

// Start the server
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION! 💥 Shutting down...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.error(err.name, err.message);
  process.exit(1);
});
