const express = require("express");
const authRouter = express.Router();

const {    signupController,
    loginController,
    resetPasswordController,
    forgetPasswordController} = require("../controller/authController")


authRouter.post("/signup",signupController)

authRouter.post("/login",loginController)

authRouter.patch("/forgetPassword",forgetPasswordController)

authRouter.patch("/resetPassword",resetPasswordController)

module.exports = authRouter;
