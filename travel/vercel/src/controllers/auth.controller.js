const config = require("../config");
const userModel = require("../model/user.model");
var jwt = require('jsonwebtoken');
const sendMailUtil = require("../utils/sendMail");
const bcrypt = require('bcrypt');
const resetPasswordTemplate = require("../templates/reset.template");
const tokenModel = require("../model/token.model");
const axios = require("axios");

const login = async (req, res) => {
  try {
    const { email, password, isRemmember } = req.body;

    const foundUser = await userModel.findOne({
      email
    }).select("+password")

    if (!foundUser || !foundUser.isActive || foundUser.isDelete) {
      return res.status(404).json({
        ok: false,
        message: "Email or password wrong"
      })
    }

    const match = await bcrypt.compare(password, foundUser.password)

    if (!match) {
      return res.status(404).json({
        ok: false,
        message: "Email or password wrong"
      })
    }

    const accessToken = jwt.sign(
      {
        userID: foundUser._id,
        fullName: foundUser.fullName
      },
      config.access_key,
      { expiresIn: '1h' });


    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: config.node_env === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000
    })

    if (isRemmember === "on") {

      const refreshToken = jwt.sign(
        {
          userID: foundUser._id,
          fullName: foundUser.fullName
        },
        config.refresh_key,
        { expiresIn: '7d' });


      await tokenModel.create({
        token: refreshToken,
        userId: foundUser._id,
        ipAddress: req.ip,
        userAgent: req.get('User-Agent') || null,
      })

      foundUser.refreshToken = refreshToken;
    }

    foundUser.lastLogin = new Date();
    await foundUser.save();

    res.status(200).json({
      ok: true,
      message: "Login successfully"
    })

  } catch (error) {
    res.status(500).json({
      message: "INternal Server Error",
      error
    })
  }
}
const logout = async (req, res) => {
  try {
    req.user.refreshToken = null;
    await req.user.save();

    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });

    res.status(200).json({
      ok: true,
      message: "Logout successfully"
    })


  } catch (error) {
    res.status(500).json({
      message: "INternal Server Error",
      error
    })
  }
}
const currentUser = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({
      ok: true,
      message: "User fetch successfully",
      user
    })

  } catch (error) {
    res.status(500).json({
      message: "INternal Server Error",
      error
    })
  }
}

const forgotPass = async (req, res) => {
  try {

    const { email } = req.body;

    const foundUser = await userModel.findOne({
      email
    })


    if (!foundUser || !foundUser.isActive || foundUser.isDelete) {
      return res.status(404).json({
        ok: false,
        message: "User Not found"
      })
    }



    const resetToken = jwt.sign(
      {
        userID: foundUser._id,
        fullName: foundUser.fullName
      },
      config.reset_key,
      { expiresIn: '15m' });

    let location = null;
    const response = await axios.get(`https://ipapi.co/${req.ip}/json/`);
    if (!response.data.error) {
      const { city, region, country_name } = response.data;
      location = `${city}, ${region}, ${country_name}`;
    }



    await tokenModel.create({
      token: resetToken,
      userId: foundUser._id,
      ipAddress: req.ip,
      location,
      userAgent: req.get('User-Agent') || null,
    })



    let link = `http://localhost:5173/reset-pass?token=${resetToken}`
    const template = resetPasswordTemplate(link)

    await sendMailUtil(email, template)

    res.status(200).json({
      message: "Successfully"
    })


  } catch (error) {
    res.status(500).json({
      message: "INternal Server Error",
      error
    })
  }
}

const resetPassword = async (req, res) => {
  try {
    const token = req.query.token;
    const { newpassword } = req.body;

    if (!token) {
      return res.status(400).json({
        ok: false,
        message: "Reset token is required."
      });
    }


    const foundToken = await tokenModel.findOne({
      token,
      isValid: true
    });

    if (!foundToken) {
      return res.status(401).json({
        ok: false,
        message: "Invalid or expired token"
      })
    }

    const decode = jwt.decode(token, config.reset_key);

    if (!decode) {
      return res.status(401).json({
        ok: false,
        message: "Invalid or expired reset token."
      });
    }

    const foundUser = await userModel.findById(decode.userID).select("+password");

    if (!foundUser || !foundUser.isActive || foundUser.isDelete) {
      return res.status(404).json({
        ok: false,
        message: "User not found or inactive."
      });
    }

    const isSamePassword = await bcrypt.compare(newpassword, foundUser.password);
    if (isSamePassword) {
      return res.status(400).json({
        ok: false,
        message: "New password cannot be the same as the old password."
      });
    }

    const hash = await bcrypt.hash(newpassword, 10);
    foundUser.password = hash;
    await foundUser.save();

    await tokenModel.findOneAndUpdate(
      { token },
      { isValid: false },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      message: "Password has been successfully reset."
    });

  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({
      ok: false,
      message: "Internal server error."
    });
  }
};

const checkToken = async (req, res) => {
  try {

    const token = req.query.token;

    if (!token) {
      return res.status(401).json({
        ok: false,
        message: "Invalid token"
      })
    }

    const foundToken = await tokenModel.findOne({
      token,
      isValid: true
    }).populate("userId");


    if (!foundToken) {
      return res.status(401).json({
        ok: false,
        message: "Invalid or expired token"
      })
    }

    const decode = jwt.decode(token, config.reset_key);

    if (!decode) {
      return res.status(401).json({
        ok: false,
        message: "Invalid token"
      })
    }


    res.status(200).json({
      ok: true,
      message: "Token iS valid"
    })


  } catch (error) {
    res.status(500).json({
      message: "INternal Server Error",
      error
    })
  }
}



module.exports = {
  login,
  logout,
  currentUser,
  forgotPass,
  resetPassword,
  checkToken,
}