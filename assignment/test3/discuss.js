function f(num1,num2){
    if(num1%2 == 0 && num1%num2 == 0){
        return 0;
    }else{
        throw new Error("Incompatible types");
    }
}

console.log(f(4,3));