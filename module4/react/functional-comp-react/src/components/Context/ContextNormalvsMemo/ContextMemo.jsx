import { useState,createContext, useContext } from "react";
import Parent from './Parent'
export let Context = createContext("Hello");


export default function ContextMemo(){
    const [message,setMessage] = useState("fake message");
    const changeMessage = ()=>{
        setMessage("Message updated")
    }
    console.log("rendered context Memo")
    return(<>
        <div>Context Normal</div>
        <button onClick={changeMessage}>Click Button</button>
        <Context.Provider value = {message}>
            <Parent></Parent>
        </Context.Provider>
        
    </>)
}