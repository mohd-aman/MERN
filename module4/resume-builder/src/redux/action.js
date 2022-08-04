export const setSkinCreator = (value)=>{
    return{
        type: "SET_SKIN",
        document:value
    }
}

export const updateSkinCreator = (value)=>{
    return{
        type:"UPDATE_SKIN",
        document:value
    }
}

export const addContactCreator = (value)=>{
    return{
        type:"ADD_CONTACT",
        contact:value
    }
}

export const addEducationCreator = (value)=>{
    return{
        type:"ADD_EDUCATION",
        education:value
    }
}