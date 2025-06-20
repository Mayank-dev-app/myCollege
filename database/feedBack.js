const mongoose = require("mongoose");

const feedBackScheema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      default: "",
    },
    isverified: {
      type: Boolean,
      default: false,
    },
    otpexpireduration: {
      type: Date,
    },
  },
  { timestamps: true }
);

const feedBack = mongoose.model("feedBack", feedBackScheema);

module.exports = feedBack;
