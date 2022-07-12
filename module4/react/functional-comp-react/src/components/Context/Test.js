import React, { useContext, useState } from "react";
let context = React.createContext(null)


function Test(){
    const [firstName,setFirstName] = useState("Adam");
    const [lastName,setLastName] = useState("Smith");
    return (
        <context.Provider value={{firstName,lastName}}>
            <h1> This is parent Component</h1>
            <ChildA/>
        </context.Provider>
    )
}


function ChildA(){
    return (
        <>
        <h1>This is Child A Component</h1>
        <ChildB/>
        </>
    )
}

function ChildB(){
    return (
        <>
        <h1>This is child B Component</h1>
        <ChildC/>
        </>
    )
}


function ChildC(){
    const {firstName,lastName} = useContext(context);
    return (
        <>
        <h1>This is Child C</h1>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        </>
    )
}


export default Test