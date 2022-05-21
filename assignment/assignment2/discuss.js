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
// let arr = [1,2,3,4,5,6,7,8,9];
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

// let sum = arr.reduce(function(prev,ele){
//     return prev+ele;
// })

// console.log(sum);

// implement map

// function myMap(arr,cb){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         let ele = arr[i];
//         newArr.push(cb(ele));
//     }
//     return newArr;
// }

// let b = myMap(arr,function(x){return 5*x});
// console.log(b);


// implement filter

// function myFilter(arr,cb){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         let ele = arr[i];
//         if(cb(ele)){
//             newArr.push(ele);
//         }
//     }
//     return newArr;
// }

// let c = myFilter(arr,function(x){
//     return x%2 == 1;
// })
// console.log(c);


//-----------------> setTimeout

// setTimeout(function(){
//     console.log("Hello");
// },5000)

// console.log("World");



//--------------> setInterval


// let intervalId = setInterval(function(){
//     console.log("Hello Repeated Many Times");
// },3000);

// setTimeout(function(){
//     clearInterval(intervalId);
// },10000);


// setTimeout(function(){
//     console.log("Will I ever run?");
// },1000);

// while(true){
//     console.log("In the while loop");
// }
