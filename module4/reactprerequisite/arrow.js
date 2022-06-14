//write a func to add two numbers and print their sum

// let regularFunction = function(a,b){
//     console.log(a+b);
// }

// regularFunction(1,2);

// let add = (a,b)=>{
//     console.log(a+b);
// }

// add(1,2);


// let arrowFunction = ()=>{
//     console.log(this);
// }

// arrowFunction();

let obj = {
    name:"Aman",
    age:23,
    showDetails:function(){
        console.log(this.name+" "+this.age);
    },
    showDetailsArrow:()=>{
        console.log(this);
        console.log(this.name+" "+this.age);
    }
}

obj.showDetails();
obj.showDetailsArrow();


