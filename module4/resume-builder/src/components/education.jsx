import Preview from "./preview"
import "./education.css"
import {Link} from "react-router-dom"
import {useState} from "react"

function Education(){
    const [education,setEducation] = useState({})
    
    const onChange = (event)=>{
        let key = event.target.id;
        let value = event.target.value;
        setEducation({...education,[key]:value})
    }

    const getFieldData = (key)=>{
        if(education[key]){
            return education[key];
        }
        return "";
    }

    return(
        <div className="contact">
            <div className="contact-form">
                <div className="contact-heading">
                    <h1>Education Details</h1>
                </div>
                <div className="contact-form-details">
                    <div className="input-group">
                        <label htmlFor="">College Name</label>
                        <input type="text" id="collegeName"  value={getFieldData("collegeName")} onChange={onChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Degree</label>
                        <input type="text" id="degree"  value={getFieldData("degree")} onChange={onChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">CGPA</label>
                        <input type="text" id="summary"  value={getFieldData("summary")} onChange={onChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">City</label>
                        <input type="text" id="city"  value={getFieldData("city")} onChange={onChange}/>
                    </div><div className="input-group">
                        <label htmlFor="">State</label>
                        <input type="text" id="state"  value={getFieldData("state")} onChange={onChange}/>
                    </div><div className="input-group">
                        <label htmlFor="">Graduation Month</label>
                        <input type="text" id="graduationMonth" value={getFieldData("graduationMonth")} onChange={onChange}/>
                    </div><div className="input-group full">
                        <label htmlFor="">Graduation Year</label>
                        <input type="text" id="graduationYear"  value={getFieldData("graduationYear")} onChange={onChange}/>
                   </div>
                   <div className="next btn full">
                        <Link to="/contact">Back</Link>
                   </div>
                   <div className="back btn full">
                        <Link to="/">Next</Link>
                   </div>
                </div>
            </div>
            <div className="preview-form">
                <Preview></Preview>
            </div>
        </div>
    )
}

export default Education