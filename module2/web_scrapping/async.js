const fs = require("fs");

console.log("Before ");

fs.readFile("file.txt",cb1);
fs.readFile("f2.txt",cb2);

function cb1(error,data){
    if(error){
        console.log(error);
    }else{
        console.log("Data of file 1---> "+data);
    }
}
function cb2(error,data){
    if(error){
        console.log(erro);
    }else{
        console.log("Data of file 2 --> "+data);
    }
}

console.log("After");