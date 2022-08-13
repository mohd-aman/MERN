const express = require("express");

const app = express();

// case :1 

// app.get("/simple",function(req,res){
//     res.send("Simple output 1")
// })

// app.get("/simple",function(req,res){
//     res.send("Simple Output 2");
// })

// app.get("/simple",function(req,res){
//     res.send("simple output 3");
// })



//case 2

// app.use(function(req,res){
//     res.send("Use will always run");
// })

// app.get("/simple",function(req,res){
//     res.send("hello from get");
// })

// app.patch("/simple",function(req,res){
//     res.send("hello from patch");
// })

// app.delete("/simple",function(req,res){
//     res.send("hello from delete");
// })

// case 3
// middleware -> middleman
//user defined middleware -> next call

app.use(function(req,res,next){
    console.log("use will always run");
    next();
})

app.post("/simple",function(req,res){
    res.send("hello from post");
})






app.listen(3000,function(){
    console.log("server is started at 3000");
})
