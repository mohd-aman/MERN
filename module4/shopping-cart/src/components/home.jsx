import Product from "./product"
import "./home.css"
import {useSelector} from "react-redux"
import {useHistory} from "react-router"
let Home = () => {
    let history = useHistory();
    let state = useSelector((state)=>state);
    return (
        <>
            <div className="product-container">
                {state.map((el,index)=>(
                    <Product key={index} data={el} />
                ))}
                
            </div>
            <button
            onClick={()=>{
                history.push("/cart")
            }}
            className="shopping-cart-home">
                <span class="material-symbols-outlined">
                    shopping_cart
                </span>
            </button>
        </>
    )
}

export default Home