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
    try{
        let data = req.body;
        let newUser =await userModel.create(data);
        console.log(newUser);
        res.json({
            message:"data recieved",
        })}
    catch(err){
        res.send(err.message)
    }
})


app.listen(3000,function(){
    console.log("server started at 3000");
})