//this keyword is for reference purpose to any object
//this keyword's value will depend upon how it is called?
//1. function invocation
//2. method invocation

console.log(this);// globally call kia hai 

function abc(){
    console.log("this inside a function",this);
}
//abc(); //function invocation

let obj = {
    name:"Aman",
    age:23,
    def:function(){
        // console.log(this);
        function klm(){
            console.log(this);
        }
        klm(); //function invocation
    }
}
// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
obj.def();        //method invocation
// console.log("##################################")
let ghi = obj.def;
ghi(); //function invocation
