import "./preview.css"
import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addCreator } from "../redux/actions"

let Preview = () => {
    let { id } = useParams();
    let state = useSelector((state) => state);
    let reqObj = state[id];
    let dispatch = useDispatch()
    return (

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
                    <button onClick={() => {
                        dispatch(addCreator(id))
                        alert("Added to Cart!!")
                    }}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}
export default Preview