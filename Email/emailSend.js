const transporter = require("./emailConfig,");

const mailoption = async (email, otp)=>{
try {
    const response = await transporter.sendMail({
        from: "Mayank Sharma <msharma7055084627@gmail.com",
        to: email,
        subject: " Send a Feedback Message",
        text: 'reletede to take feedback from the people',
        html: `Your OTP is ${otp}`,
    })
} catch (error) {
    console.log("mail have some error: ",error);
}
}
module.exports = mailoption;