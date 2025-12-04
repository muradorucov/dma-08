const express = require("express");
const { getAllUsers, getSingleUserByID } = require("../controller/user.controller");
const router = express.Router();


router.get("/users", getAllUsers);
router.get("/users/:id", getSingleUserByID);

module.exports = router;