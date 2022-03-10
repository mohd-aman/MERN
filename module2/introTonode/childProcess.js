let cp =  require('child_process');
// console.log(cp);

//open calculator with the help of this file

// for windows replace gnome-calculator with calc
//for mac replace gnome-calculator with open -a Calculator

// cp.execSync("gnome-calculator");
//open vscode with childProcess

// cp.execSync("code");

let content = cp.execSync("node test.js");

console.log(""+content);


