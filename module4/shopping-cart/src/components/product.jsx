import "./product.css"
import {useHistory} from "react-router"
import {useDispatch} from "react-redux"
import { addCreator } from "../redux/actions";

let Product = (props)=>{
    let history = useHistory();
    let dispatch = useDispatch();
    return(
        <div className="product-card">
            <div
            onClick={()=>{
                history.push(`/preview/${props.data.id}`)
            }}
            className="product-img">
                <img src={props.data.img} alt="product image"/>
            </div>
            <div
            onClick={()=>{
                dispatch(addCreator(props.data.id))
                alert("Added to Cart!!")
            }}
            className="product-btn">
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product