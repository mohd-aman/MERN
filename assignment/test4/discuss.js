// function* abc(){
//     console.log("Hello");
//     console.log("HI");
//     yield 1
//     console.log("Hello again");
//     console.log("Hi again")
//     yield 2;
//     console.log("bye");
// }

// let a = abc();
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());


// function* reachInfinity(){
//     for(let i=0;true;i++){
//         yield i;
//     }
// }

// let num = reachInfinity();
// console.log(num.next());
// console.log(num.next())
// console.log("HI");

// async function f1() {
//     console.log(1);
// }
  
// async function f1() {
//   console.log(2);
// }
  
// console.log(3);
// f1();
// console.log(1);
// f2();
  
// async function f2() {
//   console.log("Go!");
// }


// let userObj = {
//     private:{
//         dob:"12/3/4"
//     },
//     public:{
//         name:"Anas"
//     }
// }

// let handler = {
//     get:function(target,prop){
//         if(prop == "private"){
//             return "Access not granted"
//         }else{
//             return target[prop];
//         }
//     }
// }

// let p = new Proxy(userObj,handler);

// console.log(p.private);
// console.log(p.public);

// console.log(userObj.private);


//symbol

// let a = Symbol();
// console.log(a);
// let b= Symbol("ABC")
// console.log(b);
// console.log(b.description);
// let c= Symbol("ABC");

// let d = Symbol();
// console.log(a == d);

let a = {
}

a[ Symbol()] = 2
a[ Symbol()] = 3;

console.log(a[Symbol()]);