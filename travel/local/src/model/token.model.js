const { default: mongoose } = require("mongoose");

const tokenSchema = mongoose.Schema({
  token: {
    type: "String",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  isValid: {
    type: Boolean,
    default: true
  },
  ipAddress: {
    type: String,
    default: null
  },
  userAgent: {
    type: String,
    default: null
  },
  location: {
    type: String,
    default: null
  }
}, {
  timestamps: true
})


const tokenModel = mongoose.model("Token", tokenSchema, "tokens");
module.exports = tokenModel;