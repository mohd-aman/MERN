import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import {auth,provider} from "../firebase"
import { loginCreator } from "../redux/action";

const Signin = ()=>{
    let dispatch = useDispatch();

    (function(){
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    let {displayName,email} = user;
    let userDetails = {displayName,email}
    dispatch(loginCreator({isAuth:true,"user":userDetails}))
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    })()
    return(
        <></>
    )
}

export default Signin