const express = require("express");
const {
  login,
  logout,
  currentUser,
  forgotPass,
  resetPassword,
  checkToken
} = require("../../controllers/auth.controller");
const authenticate = require("../../middleware/authenticate");
const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/logout", authenticate, logout);
authRouter.get("/current-user", authenticate, currentUser);
authRouter.post("/forgot-pass", forgotPass);
authRouter.post("/reset-pass", resetPassword);
authRouter.get("/check", checkToken);


module.exports = authRouter;