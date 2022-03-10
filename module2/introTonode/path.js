//"/home/aman/Desktop/FJP6/module2/introTonode/path.js"

let path = require("path");
// console.log(path);

let extensionName = path.extname("/home/aman/Desktop/FJP6/module2/introTonode/childProcess.js");
console.log(extensionName);

let baseName = path.basename(__filename);
console.log(baseName);

// console.log(__dirname);

console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,"test.js");
console.log(newFilePath);