function sum(a,b){
    console.log(a+b);
}

console.log("Before Immediate");

setImmediate(()=>{
    sum(2,5);
    console.log("Set Immediate");
})

console.log("After Immediate");

console.log("Before timeout");

setTimeout(()=>{
    sum(3,5);
    console.log("Set Timeout");
})

console.log("After Timeout");

console.log("Before next tick");

process.nextTick(()=>{
    sum(4,5);
    console.log("Process Next Tick");
})

console.log("After next tick");