import Preview from "./preview"
import "./education.css"

function Education(){


    return(
        <div className="contact">
            <div className="contact-form">
                <div className="contact-heading">
                    <h1>Education Details</h1>
                </div>
                <div className="contact-form-details">
                    <div className="input-group">
                        <label htmlFor="">College Name</label>
                        <input type="text" id="collegeName" value="kjfdasl;"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Degree</label>
                        <input type="text" id="degree" value="Last Name"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">CGPA</label>
                        <input type="text" id="summary" value="summary professional"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">City</label>
                        <input type="text" id="city" value="abc@gmail.com"/>
                    </div><div className="input-group">
                        <label htmlFor="">State</label>
                        <input type="text" id="state" value="7849543"/>
                    </div><div className="input-group">
                        <label htmlFor="">Graduation Month</label>
                        <input type="text" id="graduationMonth" value="Last Name"/>
                    </div><div className="input-group full">
                        <label htmlFor="">Graduation Year</label>
                        <input type="text" id="graduationYear" value="Last Name"/>
                   </div>
                   <div className="next full">
                        <div className="btn">Back</div>
                   </div>
                   <div className="back full">
                        <div className="btn">Next</div>
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