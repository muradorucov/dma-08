const express = require("express");
const router = require("./src/routers");
const app = express();

app.use(express.json())

app.use("/users", router);


app.listen(3300, () => {
  console.log("Server is run.....");
})