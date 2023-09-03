const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3080;

app.listen(PORT, () => {
  console.log("Server listning on port:", PORT);
});
