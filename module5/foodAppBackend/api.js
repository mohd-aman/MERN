const  express = require("express")

const app = express();

//npm i cookie-parser
const cookieParser = require("cookie-parser");
// app.use(express.static('public'))

const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const planRouter = require("./routes/planRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const bookingRouter = require("./routes/bookingRoutes");

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/plan",planRouter);
app.use("/api/v1/review",reviewRouter)
app.use('/booking',bookingRouter);




app.listen(3000,function(){
    console.log("server started at 3000");
})