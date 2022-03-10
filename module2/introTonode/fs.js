let fs = require("fs");
// console.log(fs);
let path = require("path");

let filePath = path.join(__dirname,"file.txt");
// console.log(filePath);

//it creates file if it does not exists else it override
fs.writeFileSync(filePath,"Again writing on existing file");
