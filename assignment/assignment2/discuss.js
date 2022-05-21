// let a = 10;

// function func(a){
//     a++;
//     console.log(a);
// }


// console.log("Before func call"+a);
// func(a);
// console.log("After func call"+a);


// const a = [20,10,30];
// // a.push(50);
// a = [];
// console.log(a);


//Higher Order Function -> functions which accepts a function in parameter or returns a function;


// function func(){
//     return function(){
//         console.log("Inner function");
//     }
// }

// let innerFn = func();

// innerFn();

//------------------>map 
let arr = [1,2,3,4,5,6,7,8,9];
// let newArr = arr.map(function(x){
//     return 5*x;
// });
// console.log(newArr);


// console.log(arr);

//------------------>filter

// let filteredArr = arr.filter(function(x){
//     return x%2 == 0;
// })

// console.log(filteredArr);
// console.log(arr);

let sum = arr.reduce(function(prev,ele){
    return prev+ele;
})

console.log(sum);