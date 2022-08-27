const mongoose = require("mongoose")

let reviewSchema = new mongoose.Schema({
    description:{
        type:String,
        required:[true,"Review can't be empty"],
    },
    rating:{
        type:Number,
        required:[true,"Review must contain some rating"],
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.ObjectId,
        required:[true,"Review must belong to a user"],
        ref:"foodUserModel"
    },
    plan:{
        type:mongoose.Schema.ObjectId,
        required:[true,"Review must belong to a plan"],
        ref:"foodPlanModel"
    }
})

const foodReviewModel = mongoose.model('foodReviewModel',reviewSchema)

module.exports = foodReviewModel;