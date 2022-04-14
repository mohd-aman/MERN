let fs = require("fs");

let f1KaPromise = fs.promises.readFile("f1.txt");

f1KaPromise.then(function(data){
    console.log(data+"");
    let f2KaPromise = fs.promises.readFile("f2.txt");
    return f2KaPromise;
}).then(function(data){
    console.log(data+"");
}).catch(function(error){
    console.log(error);
})