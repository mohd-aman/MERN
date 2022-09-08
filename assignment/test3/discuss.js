//soln 9
// function f(num1,num2){
//     if(num1%2 == 0 && num1%num2 == 0){
//         return 0;
//     }else{
//         throw new Error("Incompatible types");
//     }
// }

// console.log(f(4,3));

//soln 6
// 1


//soln8 

// let a = null
// console.log(delete a); //false;
// 4 is the correct ans


//soln 7
setTimeout(function () {
    console.log(4);
  });
  setTimeout(function () {
    console.log(5);
  });
  
  let p = new Promise(function (resolve, reject) {
    resolve();
  });
  
  console.log(1);
  
  p.then(function () {
    console.log(2);
  });
  
  p.then(function () {
    console.log(3);
  });
  
  setTimeout(function () {
    console.log(6);
  });
  