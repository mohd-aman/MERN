import "./finalize.css"
import Preview from "./preview"
import Skin1 from "../static/images/skin1.svg"
import Skin2 from "../static/images/skin2.svg"
import Skin5 from "../static/images/skin5.svg"
import {useDispatch} from "react-redux"
import {setSkinCreator} from "../redux/action"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

function Finalize(){
    let dispatch = useDispatch()
    const handleSkinSelect = (skinCode)=>{
        console.log(skinCode)
        dispatch(setSkinCreator(skinCode))
    }

    const downloadResume = ()=>{
        // html2canvas(document.body).then(function(canvas) {
        //     document.body.appendChild(canvas);
        // });
        const input = document.getElementById("resumePreview");
        html2canvas(input)
        .then((canvas)=>{
            // to url -> image -> 64 bit ke string
            const imgData = canvas.toDataURL('image/png');
            //dimension -> pdf -> a4
            //p -> portrait
            //unit -> mm
            const pdf = new jsPDF("p","mm","a4");
            //empty page width
            var width = pdf.internal.pageSize.getWidth();
            //empty page height
            var height = pdf.internal.pageSize.getHeight();
            // image -> add -> pdf
            pdf.addImage(imgData,"JPEG",0,0,width,height);
            pdf.save("resume.pdf");
        }).catch((function(error){
            console.log(error);
        }))
    }
    return(
        <div className="finalize">
            <div className="finalize-preview" id="resumePreview">
                <Preview></Preview>
            </div>
            <div className="download-options">
                <div className="download-btn">
                    <button className="btn" onClick={downloadResume}>Download Resume as PDF</button>
                </div>
                <div className="save-btn">
                    <button className="btn">Save to Database</button>
                </div>
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