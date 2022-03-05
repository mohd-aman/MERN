// printing in javaScript
console.log("Swagat hai aap sabhi logo ka!!!!!");

console.log("Pepcoders");

// variables in js and data types
let num = 10; // Number
console.log(num);

let char = 'a';// character
console.log(char);

let str = 'I am string'; //string
console.log(str);

let bool = true; // boolean
console.log(bool);

//loops 
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

for(let i=1;i<5;i++){
    console.log(i);
}

let count = 10;
while(count>0){
    console.log(count);
    count--;
}

//is prime 
let n = 34935;
let isPrime = true;

for(let i=2;i*i<=n;i++){
    if(n%i == 0){
        isPrime = false;
    }
}
if(isPrime == true){
    console.log("Number is prime");
}else{
    console.log("Number is not prime");
}