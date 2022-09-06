let obj = {
    name:"Aman",
    age:32,
    address:{
        city:"Delhi",
        pin:110053
    }
}

function flattenObj(obj,parent,ans={}){
    for(let key in obj){
        let propname = parent?parent+"_"+key:key;
        if(typeof obj[key] == "object"){
            flattenObj(obj[key],propname,ans);
        }else{
            ans[propname] = obj[key];
        }
    }
    return ans;
}

console.log(flattenObj(obj));
