//spread operator with array

// let arr = [1,2,3,5,6,7,8];
// let arr2 = [...arr]

// arr2[2] = 10;

// console.log(arr);
// console.log(arr2);

//spread operator with objects;

let obj = {
    name:"Adam",
    address:{
        country:"USA",
        state:{
            stateName:"New York",
            pincode:123456
        }
    }
}
//shallow copy
let obj2 = {...obj};

obj2.name = "Aman";


obj2.address.country = "India";


console.log(obj.name);
console.log(obj.address);
console.log("####################")
console.log(obj2.name);
console.log(obj2.address);


//deep copy
let obj3 = JSON.parse(JSON.stringify(obj))

obj3.address.country = "Japan";
console.log(obj.address.country);
console.log(obj3.address.country);