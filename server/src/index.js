const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3080;

// connecting to mongodb
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once("open", () => {
  console.log("MongoDB is connected");
});

app.listen(PORT, () => {
  console.log("Server listning on port:", PORT);
});
