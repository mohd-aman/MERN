import {Link} from "react-router-dom"

let Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">Shopping Cart</Link>
            </div>
            </nav>
            
        </>
    )
}

export default Navbar;