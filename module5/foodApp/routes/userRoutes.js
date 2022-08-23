const express = require("express");
const userRouter = express.Router();
const {
    getAllUsersController,profileController
} = require("../controller/userController")

const {protectRoute} = require("../controller/authController")
userRouter.get("/users", protectRoute,getAllUsersController)

userRouter.get("/user",protectRoute, profileController)


module.exports = userRouter;