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
        required:[true,"Name is not given. Please provide a name"]
    },
    password:{
        type:String,
        required:[true,"Password is missing"]
    },
    confirmPassword:{
        type:String,
        required:[true,"Confirm Password is Missing"],
        //custom validator
        validate:{
            validator:function(){
                return this.password == this.confirmPassword;
            },
            //error message
            message:"Password mismatch"
        }
    },
    email:{
        type:String,
        required:[true,'email is missing'],
        unique:true
    },
    phoneNumber:{
        type:String,
        minLength:[10,"less than 10 numbers"],
        maxLength:[10,"more than 10 numbers"]
    },
    pic:{
        type:String,
        default:"logo2.png"
    },
    otp:{
        type:String
    },
    otpExpiry:{
        type:Date
    },
    address:{
        type:String
    }
})

const userModel = mongoose.model('FoodUserModel',userSchema);

module.exports = userModel;