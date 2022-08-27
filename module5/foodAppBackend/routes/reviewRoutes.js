const express = require("express");
const { getAllReviewController, createReviewController } = require("../controller/reviewController");
const reviewRouter = express.Router();


reviewRouter.route('/')
    .get(getAllReviewController)
    .post(createReviewController)

module.exports = reviewRouter;