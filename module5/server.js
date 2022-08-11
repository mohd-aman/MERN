//require express
const express = require("express")

// you have to write it -> app signifies -> your server

const app = express();

//get karna hai data from sayHello
app.get("/sayHello",function(req,res){
    res.send("Hello from server");
})

//get kana hai data from sayBye
app.get("/sayBye",function(req,res){
    res.send("Bye");
})

// 3000 - address of a server -> on a given machine
app.listen(3000,function(){
    console.log("server started at port 3000")
})
