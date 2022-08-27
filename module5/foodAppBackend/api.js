const  express = require("express")

const app = express();

//npm i cookie-parser
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const planRouter = require("./routes/planRoutes");
const foodReviewModel = require("./model/reviewModel")

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/plan",planRouter);


app.post("/api/v1/review", async function(req,res){
    try{
        let reviewData = req.body;
        let review = await foodReviewModel.create(reviewData);
        res.status(201).json({
            review,
            result:"created"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:err.message})
    }
})

app.get("/api/v1/review",async function(req,res){
    try{
        let reviews = await foodReviewModel.find().populate("user plan");
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
})

app.listen(3000,function(){
    console.log("server started at 3000");
})