import "./preview.css"
import {useParams} from "react-router"
import {useSelector} from "react-redux"
let Preview = ()=>{
    let {id} = useParams();
    let state = useSelector((state)=>state);
    let reqObj = state[id];
    return(
        
        <>
            <div className="preview-container">
                <div className="preview-img-container">
                    <img src={reqObj.img} alt="" />
                </div>
                <div className="preview-listing">
                    <h2>{reqObj.name}</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem libero quasi saepe voluptate et sapiente quam nostrum aut iure odit eos id, architecto tempore non eaque dolore, quibusdam animi.e
                    </p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}
export default Preview