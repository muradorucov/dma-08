const jwt = require("jsonwebtoken")
const config = require("../config");
const userModel = require("../model/user.model");

const authenticate = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return res.status(401).json({
        ok: false,
        message: "Anauthorization"
      })
    }

    const decode = jwt.decode(accessToken, config.access_key)
    if (!decode) {
      return res.status(401).json({
        ok: false,
        message: "Anauthorization"
      })
    }

    const foundUser = await userModel.findById(decode.userID);
    if (!foundUser || !foundUser.isActive || foundUser.isDelete) {
      return res.status(404).json({
        ok: false,
        message: "User notfound"
      })
    }
    req.user = foundUser;
    next();

  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Internal Server Error",
      error
    })
  }
}

module.exports = authenticate