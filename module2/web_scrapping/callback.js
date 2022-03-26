const fs = require("fs");

console.log("Before ");

fs.readFile("file.txt",cb);

function cb(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"");
    }
}


console.log("After");