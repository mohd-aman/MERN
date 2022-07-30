import "./header.css"
import {Link} from "react-router-dom"

const Header = ()=>{
    return(
        <div className="header">
            <div className="header-logo">
                <Link to="/"><img src="https://www.pepcoding.com/images/logo.png" alt="" /></Link>
            </div>
            <div className="header-links">
                <ul>
                    <li><Link to="/template">Resume Templates</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/register"><button class="btn">Register</button></Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header