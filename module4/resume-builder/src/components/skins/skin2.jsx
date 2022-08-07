import React from "react";
import "./skin2.css";
import { useSelector } from "react-redux";
const Skin2 = () => {
  // console.log(props);
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
      <div className="contact-details-skin2">
        <div className="contact-details-name-s2">
          <div className="contact-details-logo-s2">
            {fname.charAt(0)} {lname.charAt(0)}
          </div>
          <div className="contact-details-fullName-s2">
            {fname} {lname}{" "}
          </div>
          <div className="contact-details-profession-s2">{profession}</div>
        </div>
        <div className="contact-details-email-phone-s2">
          <div className="contact-details-address-s2">
            {street} {city} {pin} {state}
          </div>
          <div className="contact-details-phone-s2">{phone}</div>
          <div className="contact-details-email-s2">{email}</div>
        </div>
      </div>

      <div className="professional-summary-skin2">
        <div className="professional-summary-heading-s2">
          Professional Summary
        </div>
        <div className="professional-summary-details-s2">{summary}</div>
      </div>

      {/* <div className="Skills-details-skin2">
        <div className="skills-details-heading-s2">Skills</div>
        <div className="skills-details-s2">
          <ul>{AllSkill}</ul>
        </div>
      </div> */}

      {/* <div className="projects-details-skin2">
        <div className="projects-details-heading-s2">Projects</div>
        <div className="projects-details-s2">
          <ul>{AllProjects}</ul>
        </div>
      </div> */}

      <div className="education-details-skin2">
        <div className="education-details-heading-s2">Education</div>
        <div className="education-details-s2">
          <div className="education-details-degree-s2">
            {degree} with GPA : {cgpa}
          </div>
          <div className="education-details-name-s2">
            {collegeName} , {educationCity} , {educationState} {graduationMonth}{" "}
            {graduationYear}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skin2;
