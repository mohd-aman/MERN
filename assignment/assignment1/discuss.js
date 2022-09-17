// if(true) {
//     console.log("Hello I am inside if");
//     console.log("another line in if");
// }




// var a = 2;
// {
//   var a = 3;
//   {
//     var a = 4;
//     {
//       var a = 5;
//       console.log(a);
//     }
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);



// Sample Input:
// [
//   { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
//   { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
// ];

// Sample Output:
// [
//   { name: "Roorkee", avgRainfall: 5.714285714285714 },
//   { name: "Pauri", avgRainfall: 2.2857142857142856 },
// ];


// function rainDance(arr){
//     let ans = [];
//     for(let i=0;i<arr.length;i++){
//         let obj = {};
//         obj.name = arr[i].name;
//         let sum = 0;
//         let  rainfallArr= arr[i].rainfall;
//         for(let j=0;j<rainfallArr.length;j++){
//             sum+=rainfallArr[j];
//         }
//         let avg = sum/rainfallArr.length;
//         obj.avg = avg;
//         ans.push(obj);
//     }
//     return ans;
// }

// console.log(rainDance([
//     { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] },
//     { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] },
//     { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] },
//     { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] },
// ]));



// let a;

// a = 10;

// console.log(a);

// func();

// function func(){
//     console.log(a);
//     let a = 5;
// }



// let a;

// console.log(a);

// function A() {
//   let a = 2;
//   console.log(a);

//   function C() {
//     console.log(a);

//     function D() {
//       console.log(a);

//       a = 2;
//     }
//     D();
//     a = 3;
//   }
//   C();
// }

// function B() {
//   let a;
//   console.log(a);
  
//   function E() {
//     a = 6;
//     console.log(a);
    
//   }
  
//   a = 2;
//   E();
//   console.log(a);
// }

// function F() {
//   console.log(a);
//   a = 2;
// }

// a = 3;

// F();
// B();
// A();



// function fun(){
//   for(let i = 0; i <= 5; i++){
//       setTimeout(function(){
//           console.log(i);
//       }, i * 1000);
//   }
// }

// fun();
