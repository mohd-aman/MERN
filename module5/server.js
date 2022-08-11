//require express
const express = require("express")

// you have to write it -> app signifies -> your server

const app = express();

app.get("/",function(req,res){
    res.send("Hello from server");
})

app.listen(3000,function(){
    console.log("server started at port 3000")
})