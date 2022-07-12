import { useState,createContext, useContext } from "react";
let Context = createContext("Hello");

export default function ContextNormal(){
    const [message,setMessage] = useState("fake message");
    const changeMessage = ()=>{
        setMessage("Message updated")
    }
    console.log("rendered context Normal")
    return(<>
        <div>Context Normal</div>
        <button onClick={changeMessage}>Click Button</button>
        <Context.Provider value = {message}>
            <Parent></Parent>
        </Context.Provider>
        
    </>)
}

function Parent(){
    console.log("Rendered parent")
    return(
        <>
        <div>I am a parent</div>
        <Children></Children>
        </>
    )
}


function Children(){
    console.log("Redered children")
    return(
        <>
        <div> I am a Children</div>
        <GrandChild></GrandChild>
        </>
    )
}

function GrandChild(){
    let message = useContext(Context);
    console.log("rendered grandchild")
    return (
        <>
        <div> ---------------------------------------- </div>
        <div>I am a grandChild</div>
        <div>God send this message { message}</div>
        </>
    )
}