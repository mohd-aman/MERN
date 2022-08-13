 const express = require("express")

 const app = express();

 app.use(express.json());

app.post("/simple",function(req,res,next){
    let data = req.body;
    //Object.keys(data) => ["name",'age']
    let length = Object.keys(data).length;
    if(length == 0){
        res.send("Kindly enter data in boody");
    }else{
        next();
    }
})

app.post("/simple",function(req,res){
    console.log("data",req.body);
    res.status(200).send("Hello from Post 2");
})


 app.listen(3000,function(){
    console.log("Server is started at 3000");
 })