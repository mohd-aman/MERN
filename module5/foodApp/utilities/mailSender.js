const nodemailer = require("nodemailer");
const password = require("./secrets")

async function mailSender(email,otp) {


  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "mohammad.aman@pepcoding.com", // generated ethereal user
      pass: password, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"FoodApp 👻" <food.app@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔ Your Reset Password Request", // Subject line
    html: `<b>Your reset Otp is ${otp}, Your otp will expire in 5 minutes</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = mailSender;
