import "./finalize.css"
import Preview from "./preview"
import Skin1 from "../static/images/skin1.svg"
import Skin2 from "../static/images/skin2.svg"
import Skin5 from "../static/images/skin5.svg"
import {useDispatch} from "react-redux"
import {setSkinCreator} from "../redux/action"
function Finalize(){
    let dispatch = useDispatch()
    const handleSkinSelect = (skinCode)=>{
        console.log(skinCode)
        dispatch(setSkinCreator(skinCode))
    }
    return(
        <div className="finalize">
            <div className="finalize-preview">
                <Preview></Preview>
            </div>
            <div className="final-templates">
                {/* All templates */}
                <div className="template" >
                    <img src={Skin1} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin1")}>USE TEMPLATE</button>
                </div>
                <div className="template">
                    <img src={Skin2} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin2")}>USE TEMPLATE</button>

                </div>
                <div className="template">
                    <img src={Skin5} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin5")}>USE TEMPLATE</button>
                </div>
            </div>
        </div>
    )
}

export default Finalize