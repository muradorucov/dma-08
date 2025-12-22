const { default: mongoose } = require("mongoose");

const tourSchmea = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  expiredDate: {
    type: Date,
    required: true
  },
  image: {
    type: [String],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isDelete: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
})


const tourModel = mongoose.model("Tour", tourSchmea, "tours");

module.exports = tourModel;