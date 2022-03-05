//empty array
let arr = [];
console.log(arr);

// array with elements

let eleArr = [1,2,4,5,"Hello I am String",false,'c',4.5]
console.log(eleArr);

console.log("Element at 4th index: " + eleArr[4]);

console.log("Element at 0th index : "+ eleArr[0]);

eleArr[3] = "Nothing";

console.log(eleArr);

console.log("###############################################")

//Arrays method
//1. push
console.log("Array before push: ",eleArr);
eleArr.push("new item");
console.log("Array after push : ",eleArr);

//2. pop

console.log("Array before pop : ",eleArr);
eleArr.pop();
console.log("Array after pop: ",eleArr);

//3. shift

console.log("Array before shift: ",eleArr);
eleArr.shift();
console.log("Array after shift: ",eleArr);


//4. unshift

console.log("Array before unshift: ",eleArr);
eleArr.unshift("newly added item");
console.log("Array after unshift: ",eleArr);

//length

let len = eleArr.length;
console.log(len);