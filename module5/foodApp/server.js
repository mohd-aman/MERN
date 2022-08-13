const  express = require("express")

const app = express();

const userModel = require("./userModel");



app.listen(3000,function(){
    console.log("server started at 3000");
})