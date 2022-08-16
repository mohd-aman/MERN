//tech knowledge
//(scheme) -> set of features and rules a certain entity should follow
const mongoose = require('mongoose')
const {Schema} = mongoose
const pass = require("./secrets");

let dbLink = `mongodb+srv://dbUser:${pass}@cluster0.o6s3ey1.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(dbLink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error",err);
})


//how to create a schema -> only entries written will be added to your db no one else.

let userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        minLength:10,
        maxLength:10
    },
    pic:{
        type:String,
        default:"logo2.png"
    },
    address:{
        type:String
    }
})

const userModel = mongoose.model('FoodUserModel',userSchema);

module.exports = userModel;