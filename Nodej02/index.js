const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./src/router");

dotenv.config()
app.use(express.json());

app.use(router)

app.listen(process.env.PORT, () => {
  console.log("Server is runnn...");
})