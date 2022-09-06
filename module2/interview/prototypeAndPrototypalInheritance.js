// let str = "Hello I'm Aman";
// let words = str.split(" ");
// console.log(words);

//this 'split' is defined on the str prototype object.

// Prototype is a reference to another object.

// object prototypes
// All js objects have a prototype, which is an object that it inherits properties from.

let obj = {};
// console.log(obj);
// console.log(obj.__proto__);

//prototypal inheritance.

let person1 = {
    name:"Adam",
    age:25
}

let person2 = {
    name:"Steve"
}

console.log(person2.name+ " " + person2.age);

person2.__proto__ = person1;
console.log(person2.name+" "+person2.age);

// if an object has its own property and an inherited property with same name,
// then alwast pick the own property.
