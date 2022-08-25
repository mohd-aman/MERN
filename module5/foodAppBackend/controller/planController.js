const foodPlanModel = require("../model/planModel")

async function getAllPlansController(req,res){
    try{
        let plans = await foodPlanModel.find();
        res.status(200).json({
            AllPlans:plans
        })
    }catch(err){
        res.status(500).json({err:err.message});
    }
}

async function getPlanController(req,res){

}

async function createPlanController(req,res){
    try{
        let data = req.body;
        let newPlan = await foodPlanModel.create(data);
        console.log(newPlan);
        res.status(201).json({
            result:"plan created",
            plan:newPlan
        })
    }catch(err){
        console.log(err);
        res.status(500).json({err:err.message});
    }
}

async function updatePlanController(req,res){

}

async function deletePlanController(req,res){

}

module.exports = {
    getAllPlansController,
    getPlanController,
    createPlanController,
    updatePlanController,
    deletePlanController
}