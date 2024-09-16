const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "config.env") });

const PORT = process.env.PORT;
const DB = process.env.DB;
const PW = process.env.PW;

const DBURL = DB.replace("<db_password>", PW);

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
