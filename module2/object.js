//empty object
// let obj = {};
// console.log(obj);

// let objAman = {
//     Name: "Mohd Aman",
//     Age: 45,
//     phoneNo: 8860503744,
//     lastName:'Aman'
// };

// console.log(objAman);

let capAmerica = {
    Name: 'Steve',
    Age: 9999,
    Friends: ['Natasha','Thor','Tony','Bucky','Bruce'],
    address: {
        city:"Queens",
        state:'Haryana'
    },
    sayHi:function(){
        console.log("Cap America says Hiiiii")
    }
}

//whole object
// console.log(capAmerica);

//name of capAmerica
console.log(capAmerica.Name)
//age of capAmerica
console.log(capAmerica.Age);
//friends of capAmerica
console.log(capAmerica.Friends);
console.log(capAmerica.Friends[0]);
//address object
console.log(capAmerica.address);
console.log(capAmerica.address.city)

// call fxn sayHi
capAmerica.sayHi();