// Create a trap for the following object so private data cannot be accessed 

let userObj = {
    private:{
        dob:"12/3/4"
    },
    public:{
        name:"Anas"
    }
}


let handler = {
    get:function(target,prop){
        if(prop == "private"){
            return "Access not granted"
        }else{
            return target[prop];
        }
    }
}

let p = new Proxy(userObj,handler);

console.log(p.private);
console.log(p.public);