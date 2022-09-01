//module.exports

// console.log(module);


//default export method
// module.exports = function sumGenerator(num1,num2){
//     return num1+num2;
// }

//named export method
// module.exports.sumGenerator = (num1,num2)=>{
//     return num1+num2;
// }
// let myStr = "Hi Everyone"
// let sum = (a,b)=>{return a+b}

// module.exports = {
//     sum,
//     myStr
// }

// console.log(module);

// to use Es Modules instead of default commonjs module system in nodejs
        //there are 2 ways 
            //1-> change extension to .mjs from .js
            //2->Or instead of changing the file extension, we can also add a property
            //  "type":"module" at top level of package.json to use ES modules.

//export
//named export (multiple per module)
// export function sumGenerator(num1,num2){
//     return num1+num2;
// }

// export function greeting(){
//     return "Hi Everyone"
// }

// export let myStr = "This is my string"


// //default export

// export default function sumGenerator(num1,num2){
//     return num1+num2;
// }