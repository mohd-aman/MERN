// read content of unorganised folder and make  an array which has extension name of each file

let fs = require("fs");
const path = require("path");

let folderKaPath = path.join(__dirname,"..","unorganised");
// console.log(folderKaPath);
let content = fs.readdirSync(folderKaPath)
// console.log(content);
let extArr = [];
for(let i=0;i<content.length;i++){
    let name = content[i];
    let extName = path.extname(name);
    extArr.push(extName);
}

console.log(extArr);