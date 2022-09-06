let person1 = {
    name:"Adam",
    age:25,
    showDetails:function(){
        console.log(`Hello from ${this.name}, I'm ${this.age} years old.`);
    }
}

// let person2 = {
//     name:"Vasu",
//     age:24,
//     showDetails:function(){
//         console.log(`Hello from ${this.name}, I'm ${this.age} years old.`);
//     }
// }

// let person3 = {
//     name:"Navdeep",
//     age:26,
//     showDetails:function(){
//         console.log(`Hello from ${this.name}, I'm ${this.age} years old.`);
//     }
// }

// object person2 and person3 can borrow showDetails method from person1.

// we have three methods call, apply and bind built in function. They allow us to call a fxn
// with a given "this" context and arguments.
// Basically They let us call a fxn and have access to the properties of another obj.


// call method -> call() method calls a fxn with a given 'this' value.

let person2 = {
    name:"Bruce",
    age:50
}

// person1.showDetails.call(person2);

//function borrowing

// showDetails = function(){
//     console.log(`Hello from ${this.name}, I'm ${this.age} years old.`);
// }

let person3 = {
    name:"Start",
    age:40
}

// showDetails.call(person3);

//in call() method we can pass multiple arguments by a comma

showDetails = function(city,state){
    console.log(`Hello from ${this.name}, I'm ${this.age} years old. I live in ${city}, ${state}`);
}

showDetails.call(person2,"Noida","UP");

