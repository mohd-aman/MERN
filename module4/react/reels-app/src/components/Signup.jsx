import {useState} from "react"
import {auth,db} from "../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {setDoc,doc} from "firebase/firestore"

function Signup(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const[loader,setLoader] = useState(false);
    const[error,setError] = useState("");
    const[user,setUser] = useState("");
    
    async function processSignup(){
        try{
            setLoader(true);
            let userCred = await createUserWithEmailAndPassword(auth,email,password)
            await setDoc(doc(db, "users", userCred.user.uid), {
                email,
                name,
                reelsIds:[],
                profileImgUrl:"",
                userId:userCred.user.uid
              });
            setUser(userCred.user);
        }catch(error){
            setError(error.message);
            setTimeout(()=>{
                setError("")
            },2000)
        }
        setLoader(false);
    }

    return(
        <>
        {error!=""?<h1>Error is {error}</h1>:
            loader == true?<h1>...Loading</h1>:
                user!=""?<h1>Sign up User is {user.uid}</h1>:
            <>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}}  value={email} placeholder="email"></input><br></br>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value ={password} placeholder="password"></input><br></br>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Full Name"></input><br></br>
            <button type="click" onClick={processSignup}>Sign up</button>
            </>
        }
        </>
    )
}

export default Signup