import { useSelector } from "react-redux";
import Skin1 from "./skins/skin1";
import Skin2 from "./skins/skin2"
import Skin5 from "./skins/skin5";

function Preview(){
    let state = useSelector((state)=>state);
    let document = state.documentReducer;
    let skinCode = document.skinCd
    console.log(document)
    return(
        <>
        {skinCode == "skin1" && <Skin1></Skin1>}
        {skinCode == "skin2" && <Skin2></Skin2>}
        {skinCode == "skin5" && <Skin5></Skin5>}
        </>
    )
}

export default Preview