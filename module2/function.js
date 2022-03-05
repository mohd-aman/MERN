//function in js without parameter and without return type
function sayHello(){
    console.log("Hello from functions");
}

sayHello();

// function with parameter 
function sum(num1,num2){
    let addition = num1+num2;
    console.log("Addition of given numbers: "+ addition)
}

sum(3,5);

//function with return type
function multiply(num1,num2){
    return num1*num2;
}

let ans = multiply(3,5);
console.log(ans);

//functions are first class citizen in js

let a = function sub(num1,num2){
            return num1-num2; 
        }


console.log(a(10,5));

//IIFE