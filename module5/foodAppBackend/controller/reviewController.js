const foodReviewModel = require("../model/reviewModel");
const foodPlanModel = require("../model/planModel");


//example -> 1,2,3,4,5 -> avg 15/5 = 3
//you have already an average of 3. one more review is added 3 what will be the new average?
// total sum = avg*length = 3*5 = 15 add new entry to it 
// new total sum = 18
//new length = old length + 1 = 6
//new average = new total sum / new length = 18/6 = 3


 async function createReviewController(req,res){
    try{
        let reviewData = req.body;
        let review = await foodReviewModel.create(reviewData);
        let rating = review.rating;
        let reviewId = review["_id"];
        let currentPlan = await foodPlanModel.findById(review.plan);
        let totalNumRating = currentPlan.reviews.length;
        let prevAvg = currentPlan.averageRating;
        if(prevAvg){
            let totalSumRating = prevAvg*totalNumRating;
            let newAvg = (totalSumRating + rating)/(totalNumRating+1);
            currentPlan.averageRating = newAvg;
        }else{
            currentPlan.averageRating = rating;
        }
        currentPlan.reviews.push(reviewId);
        await currentPlan.save();
        res.status(201).json({
            review,
            result:"created"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:err.message})
    }
}


async function getAllReviewController(req,res){
    try{
        let reviews = await foodReviewModel.find()
        .populate({ path: 'user', select: 'name pic' })
        .populate({ path: 'plan', select: 'name duration price'});
        res.status(200).json({
            reviews,
            result:"all reviews sent"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports = {
    createReviewController,
    getAllReviewController
}