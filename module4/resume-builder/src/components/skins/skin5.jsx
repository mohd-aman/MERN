import React from 'react';
import { useSelector } from 'react-redux';
import './skin5.css'
const Skin5 = () => {
    let props = useSelector((state)=>state);    
    let {
        fname,
        lname,
        summary,
        email,
        phone,
        profession,
        street,
        city,
        state,
        country,
        pin,
    } = props.contactReducer;


    let { cgpa,
         city: educationCity,
         state: educationState,
         degree, collegeName, 
         graduationMonth, 
         graduationYear,
         } = props.educationReducer;

    return (
        <React.Fragment>
            <div className="prev-header">
                <div className="name">
                    <div className="fname">{fname}</div>
                    <div className="lname">{lname}</div>
                </div>
                <div className="contacts">
                    <div className="adress">
                        <div className="street">{street}</div>
                        <div className="city">{city}</div>
                        <div className="state">{state}</div>
                        <div className="country">{country}</div>
                        <div className="pin">{pin}</div>
                    </div>
                    <div className="phone">Ph - {phone}</div>
                    <div className="email">Email - {email}</div>
                </div>
            </div>
            <div className="hsum">
            <div className="heading">Professional Summery</div>
            <div className="summary">
                <div className="profession details">{profession} {summary}</div>
            </div>
            </div>

            <div className="edu">
            <div className="heading">EDUCATION</div>
            <div className="education-details">
                <div className="line1">
                    
                    <div className="edu-end">
                        <div className="graduationMonth">{graduationMonth}</div>
                        <div className="graduationYear">{graduationYear}</div>
                    </div>
                </div>
                <div className="edu-contact">
                <div className="course-detail">
                        <div className="degree">{degree}</div>
                        <div className="college">: {collegeName}</div>
                    </div>
                    <div className="educationCity">{educationCity}</div>
                    <div className="educationState">{educationState}</div>
                    
                </div>
                <div className="cgpa">CGPA: {cgpa}</div>
            </div>
            </div>
        </React.Fragment>

    );
}

export default Skin5;