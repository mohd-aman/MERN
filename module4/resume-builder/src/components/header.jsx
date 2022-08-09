import "./header.css"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"

const Header = ()=>{
    let state = useSelector((state)=>state);
    let auth = state.authReducer;
    console.log(auth);
    return(
        <div className="header">
            <div className="header-logo">
                <Link to="/"><img src="https://www.pepcoding.com/images/logo.png" alt="" /></Link>
            </div>
            <div className="header-links">
            {auth.isAuth?<ul>
                    <li><Link to="/template">Resume Templates</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/">Log out</Link></li>
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