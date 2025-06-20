const user = require("../database/feedBack");
const mailoption = require("../Email/emailSend");
const express = require("express");
const Router = express.Router();

Router.post("/message", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send({
        success: false,
        message: "Please fill all inputs",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Send OTP email
    await mailoption(email, otp);

    // Save user with OTP and verification fields
 await user.findOneAndUpdate(
  { email },
  {
    name,
    message,
    otp,
    isverified: false,
    otpexpireduration: new Date(Date.now() + 2 * 60 * 1000),
  },
  { upsert: true, new: true }
);

console.log("Stored expiration:", user.otpexpireduration);
console.log("Current time:", new Date());
console.log("Expired?", user.otpexpireduration < new Date());
    return res.status(201).send({
      success: true,
      message: "Your message was sent successfully – please verify OTP",
    });

  } catch (error) {
    console.log(error); 
    return res.status(500).send({
      success: false,
      message: "Some error occurred on the server – please contact support",
    });
  }
});


Router.post("/verify", async (req, res) => {
 try {
   const { email, otp } = req.body;
   if(!email || !otp){
    return res.status(401).send({
      success: false,
      message: 'Please filled all input filleds',
    });
   }

   const verify = await user.findOne({email});
   if(!verify){
      return res.status(401).send({
        success: false,
      message: 'Email or OTP is wrong please fill again',
      });
   }



    // OTP Expire Check
    if (
      verify.otpexpireduration &&
      verify.otpexpireduration < new Date()
    ) {
      return res
        .status(400)
        .json({
          success: false,
          message: "OTP has expired. Please request a new one.",
        });
    }

    if (verify.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP." });
    }

    // When Otp is Correct 
    verify.isverified = true;
    verify.otp = undefined; // Remove Otp
    verify.otpexpireduration = undefined; // Remove Otp Expired
    await verify.save();

    return res.status(200).send({
      success: true,
      message:'Thank You For giving your Precious FeedBack. Thank You so Much'
    });

 } catch (error) {
   console.log("The verification have some error: ", error);
   return res.status(500).send({
    success:false,
    message: 'Somthing is wrong in opt verification',
   })
 }
});

module.exports = Router;
