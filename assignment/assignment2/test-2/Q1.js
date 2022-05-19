// Q-  List the side effect and convert the function to a pure function which does the same thing

let arr = [1, 2, 3, 4];

function f(arr) {
    for (x in arr) {
        arr[x] = 0
    }
    return arr;
}

console.log(arr);

console.log(g(arr));

console.log(arr);

//solution 
function g(arr){
    let nArr = [];
    for(x in arr){
        nArr[x] = 0;
    }
    return nArr;
}