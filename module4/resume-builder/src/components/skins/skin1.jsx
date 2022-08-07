import React from "react";
import { useSelector } from "react-redux";
import "./skin1.css";

const Skin1 = () => {
  let props = useSelector((state)=>state)
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

  let {
    cgpa,
    city: educationCity,
    state: educationState,
    degree,
    collegeName,
    graduationMonth,
    graduationYear,
  } = props.educationReducer;
//   let skills = props.skills;
  // console.log(props);
//   let projects = props.projects;
  // console.log(projects);
//   let AllSkill = skills.map((obj) => <li key={obj.skill}>{obj.skill}</li>);
//   let AllProjects = projects.map((obj) => (
//     <li key={obj.projectName}>
//       {obj.projectName} :: {obj.description}
//     </li>
//   ));
  return (
    <React.Fragment>
      <div className="contact-details-skin1">
        <div className="contact-full-name">
          {fname} {lname}
        </div>
        <div className="email-phone">
          <div className="email-details">{email}</div>
          <div className="phone-details">{phone}</div>
        </div>
        <div className="address-details">
          {street} {city} {pin} {state} {country}
        </div>
        <div className="profession-details">{profession}</div>
      </div>

      <div className="professional-summary-skin1">
        <div className="professional-summary-heading">Professional Summary</div>
        <div className="professional-summary-details">{summary}</div>
      </div>

      {/* <div className="Skills-details-skin1">
        <div className="skills-details-heading">Skills</div>
        <div className="skills-details">
          <ul>{AllSkill}</ul>
        </div>
      </div> */}
{/* 
      <div className="projects-details-skin1">
        <div className="projects-details-heading">Projects</div>
        <div className="projects-details">
          <ul>{AllProjects}</ul>
        </div>
      </div> */}

      <div className="education-details-skin1">
        <div className="education-details-heading">Education</div>
        <div className="education-details">
          <div className="education-details-degree">
            {degree} with GPA : {cgpa}
          </div>
          <div className="education-details-name">
            {collegeName} , {educationCity} , {educationState} {graduationMonth}{" "}
            {graduationYear}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skin1;
