import Preview from "./preview"
import "./contact.css"

function Contact(){


    return(
        <div className="contact">
            <div className="contact-form">
                <div className="contact-heading">
                    <h1>Personal Details</h1>
                </div>
                <div className="contact-form-details">
                    <div className="input-group">
                        <label htmlFor="">First Name</label>
                        <input type="text" id="fname" value="Aman"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Last Name</label>
                        <input type="text" id="lname" value="Last Name"/>
                    </div>
                    <div className="input-group full">
                        <label htmlFor="">Professional Summary</label>
                        <input type="text" id="summary" value="summary professional"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input type="text" id="email" value="abc@gmail.com"/>
                    </div><div className="input-group">
                        <label htmlFor="">Phone</label>
                        <input type="text" id="phone" value="7849543"/>
                    </div><div className="input-group">
                        <label htmlFor="">Professional</label>
                        <input type="text" id="lname" value="Last Name"/>
                    </div><div className="input-group">
                        <label htmlFor="">Street</label>
                        <input type="text" id="street" value="Last Name"/>
                    </div><div className="input-group">
                        <label htmlFor="">City</label>
                        <input type="text" id="city" value="Last Name"/>
                    </div><div className="input-group">
                        <label htmlFor="">State</label>
                        <input type="text" id="state" value="Last Name"/>
                    </div><div className="input-group">
                        <label htmlFor="">Country</label>
                        <input type="text" id="country" value="Last Name"/>
                    </div><div className="input-group">
                        <label htmlFor="">Pin Code</label>
                        <input type="text" id="pin" value="Last Name"/>
                    </div>
                </div>
            </div>
            <div className="preview-form">
                <Preview></Preview>
            </div>
        </div>
    )
}

export default Contact