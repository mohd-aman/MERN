export const incrementCounter = (value)=>{
    return{
        type:"INCREMENT",
        payload:value
    }
}

export const decrementCounter = ()=>{
    return {
        type:"DECREMENT"
    }
}

export const loginCreator = ()=>{
    return{
        type:"LOGIN"
    }
}

export const logoutCreator = ()=>{
    return{
        type:"LOGOUT"
    }
}