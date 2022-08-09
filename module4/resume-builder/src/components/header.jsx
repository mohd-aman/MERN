import "./header.css"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAuth, signOut } from "firebase/auth";
import { logoutCreator } from "../redux/action";

const Header = ()=>{
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    let auth = state.authReducer;
    console.log(state);
    const logout = ()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(logoutCreator());
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        
          
    }
    return(
        <div className="header">
            <div className="header-logo">
                <Link to="/"><img src="https://www.pepcoding.com/images/logo.png" alt="" /></Link>
            </div>
            <div className="header-links">
            {auth.isAuth?<ul>
                    <li><Link to="/template">Resume Templates</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/" onClick={logout}>Log out</Link></li>
                </ul>:
                <ul>
                    <li><Link to="/template">Resume Templates</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/register"><button class="btn">Register</button></Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>}
                
            </div>
        </div>
    )
}

export default Header