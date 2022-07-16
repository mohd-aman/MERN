import { useState } from "react"
import {auth} from "../firebase"
import {signInWithEmailAndPassword } from "firebase/auth";

function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const trackEmail = function(e){
        setEmail(e.target.value);
    }

    const trackPassword = function(e){
        setPassword(e.target.value);
    }

    const printDetails = async function(){
        // alert(email + " " + password)
        let userCred = await signInWithEmailAndPassword(auth,email,password)
        console.log(userCred.user);
    }

    return (
        <>
            <input type="email" onChange={trackEmail}  placeholder="email" />
            <br></br>
            <input type="password" onChange={trackPassword} placeholder="password" />
            <br></br>
            <button type="click" onClick={printDetails}>Login</button>
        </>
    )
}

export default Login