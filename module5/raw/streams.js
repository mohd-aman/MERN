const fs = require("fs");


//READSTREAM
// let content = '';

// let readStream = fs.createReadStream('input.txt');

// readStream.on('data',function(chunk){
//     content+=chunk;
//     console.log("chunk is recieved");
// })

// readStream.on('end',function(){
//     // console.log(content+"");
//     console.log("data read complete");
// })


//WRITESTREAM

// let data = "I hate coding sometimes"

// let writeStream = fs.createWriteStream("output.txt");

// writeStream.write(data,'utf-8');

// writeStream.end()

// writeStream.on('finish',function(){
//     console.log("writing complete");
// })


//PIPE

let readStream = fs.createReadStream("input.txt");
let writeStream = fs.createWriteStream("output2.txt");

readStream.pipe(writeStream);