const foodPlanModel = require("../model/planModel")

async function getAllPlansController(req,res){
    try{
        let plans = await foodPlanModel.find().populate("reviews");
        res.status(200).json({
            AllPlans:plans
        })
    }catch(err){
        res.status(500).json({err:err.message});
    }
}

async function createPlanController(req,res){
    try{
        let data = req.body;
        let newPlan = await foodPlanModel.create(data);
        console.log(newPlan);
        res.status(201).json({
            data:"plan created",
            plan:newPlan
        })
    }catch(err){
        console.log(err);
        res.status(500).json({err:err.message});
    }
}

async function getPlanController(req,res){
    try{
        let id = req.params.planRoutes;
        let plan = await foodPlanModel.findById(id).populate("reviews");
        res.status(200).json({
            data:"plan found",
            plan:plan
        })
    }catch(err){
        console.log(err);
        res.json(500).json({
            err:err.message
        })
    }
}

async function updatePlanController(req,res){
    try{
        let data = req.body;
        let id = req.params.planRoutes;
        const plan = await foodPlanModel.findById(id);
        for(let key in data){
            plan[key] = data[key];
        }

        await plan.save();
        
        res.status(200).json({
            data:"plan update",
            plan
        })
    }catch(err){
        console.log(err);
        res.json(500).json({
            err:err.message
        })
    }
}

async function deletePlanController(req,res){
    try{
        let id = req.params.planRoutes;
        let plan = await foodPlanModel.findByIdAndDelete(id);
        res.status(200).json({
            data:"plan deleted",
            plan:plan
        })
    }catch(err){
        console.log(err);
        res.json(500).json({
            err:err.message
        })
    }
}

module.exports = {
    getAllPlansController,
    getPlanController,
    createPlanController,
    updatePlanController,
    deletePlanController
}