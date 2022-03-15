let fs = require("fs");
// console.log(fs);
let path = require("path");

// let filePath = path.join(__dirname,"file.txt");
// // console.log(filePath);

// //C-create
// //it creates file if it does not exists else it override
// fs.writeFileSync(filePath,"Hello I am a text file ");

// //R-read
// console.log("Before update : ");
// let content = fs.readFileSync(filePath,'utf-8');
// console.log(content);

// //U-update
// fs.appendFileSync(filePath,"\nNewly added content");
// console.log("After update : ")
// console.log(fs.readFileSync(filePath,'utf-8'));

// //D-delete
// fs.unlinkSync(filePath);

//Create a directory

if(!fs.existsSync("hamariDirectory"))
    fs.mkdirSync("hamariDirectory");

//Read a directory

let folderPath = __dirname;

let contentOfFolder = fs.readdirSync(folderPath);
console.log(contentOfFolder);

//Delete a directory

fs.rmdirSync("hamariDirectory")

//copy a file 

let sourcePath = path.join(__dirname,"file.txt")
let destinationPath = path.join(__dirname,"module","file.txt")
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);