const express = require("express");
const { getAllUsers, createUsers, getSingleUserById, updateUserById, changeUserById, deletUser } = require("../controllers/user.controller");

const router = express.Router();


router.get("/", getAllUsers)
router.post("/", createUsers)
router.get("/:id", getSingleUserById)
router.put("/:id", updateUserById)
router.patch("/:id", changeUserById)
router.delete("/:id", deletUser)


module.exports = router;