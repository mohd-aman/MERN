//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");
let path = require("path");

let arr = ['Audio','Video','Software','Documents','Applications','Others'];
let nameArr = ['abc','efg','xyz','def'];
let extArr = ['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

let organisePath = path.join(__dirname,"Organise");
if(!fs.existsSync(organisePath))
    fs.mkdirSync(organisePath);

for(let i=0;i<arr.length;i++){
    let folderKaPath = path.join(organisePath,arr[i]);
    if(!fs.existsSync(folderKaPath))
        fs.mkdirSync(folderKaPath)
    for(let j=0;j<nameArr.length;j++){
        let fileName = nameArr[j]+extArr[i];
        let fileKaPath = path.join(folderKaPath,fileName);
        fs.writeFileSync(fileKaPath,"");
    }
}