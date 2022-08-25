const express = require("express");
const { getAllPlansController, createPlanController,
     getPlanController, updatePlanController, deletePlanController } = require("../controller/planController");
const planRouter = express.Router();



// planRouter.get("/",)

// planRouter.post("/",)

planRouter.route("/")
    .get(getAllPlansController)
    .post(createPlanController)

// planRouter.get("/:planRoutes",)

// planRouter.patch("/:planRoutes",)

// planRouter.delete("/:planRoutes")
//Alternative for above 3

planRouter.route("/:planRoutes")
    .get(getPlanController)
    .patch(updatePlanController)
    .delete(deletePlanController)


module.exports = planRouter