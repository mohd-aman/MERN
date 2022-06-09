//Array
// let arr = [1,2,4];
// // let a = arr[0];
// // let b = arr[1];
// // let c = arr[2];
// let [a,b = 10,c,d = 0] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


//Object

// let obj = {
//     name:"Adam",
//     state:"New York",
//     pincode:12345
// }

// // let {name,state} = obj
// // let {state,name} = obj

// let {state,name:firstName} = obj
// console.log(firstName);
// console.log(state);


//nested obj
let obj = {
    name:"Adam",
    address:{
        country:"USA",
        state:{
            stateName:"New York",
            pincode:12345
        }
    }
}

let {name} = obj
console.log(name);

let {address:{country:cd}} = obj;
console.log(cd);

let {address:{state:{pincode}}} = obj;
console.log(pincode);