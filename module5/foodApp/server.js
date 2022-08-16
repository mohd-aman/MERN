const  express = require("express")

const app = express();

app.use(express.json());

const userModel = require("./userModel");

//signup input:
//name,
//password
//confirm password
//address
//email
//phone
//pic


app.post("/signup",async function(req,res){
    let data = req.body;
    console.log(data);
    let newUser =await userModel.create(data);
    res.json({
        message:"data recieved",
        data:data
    })
})


app.listen(3000,function(){
    console.log("server started at 3000");
})