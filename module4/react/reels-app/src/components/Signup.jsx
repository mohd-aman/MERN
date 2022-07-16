import {useState} from "react"
import {auth} from "../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
function Signup(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    
    async function processSignup(){
        let userCred = await createUserWithEmailAndPassword(auth,email,password)
        console.log(userCred.user);
    }

    return(
        <>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}}  value={email} placeholder="email"></input><br></br>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value ={password} placeholder="password"></input><br></br>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Full Name"></input><br></br>
        <button type="click" onClick={processSignup}>Sign up</button>
        </>
    )
}

export default Signup