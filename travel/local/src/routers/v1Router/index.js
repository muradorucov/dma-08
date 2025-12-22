const express = require("express");
const authRouter = require("./auth.router");
const tourRouter = require("./tours.router");
// const blogRouter = require("./blogs.router");

const v1Router = express.Router();

v1Router.use("/auth", authRouter);
v1Router.use("/tours", tourRouter);
// v1Router.use("/blogs", authenticate, blogRouter);


module.exports = v1Router;