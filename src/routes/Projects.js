import React, { useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";
const projectstyle = {
  fontFamily: "serif",
  paddingTop: "20px",
  fontSize: "44px",
  textAlign: "center",
};
function Projects() {
  useEffect(() => {
    document.title = "AK-Projects";
  });
  return (
    <>
      <p style={projectstyle}>Professional Projects</p>
      <ProjectDetails
        companyname="CITI Bank Web Application , INDIA"
        dateDetails="Jan 2018-July 2019"
        technicalrelated="Technical Skills Used: ReactJS, NodeJS, Redux, MongoDB, MySQL, Rest API’s,Postman, Html, CSS, Bootstrap"
        BulletPoints1="It is a Banking Application designed for Customers to Perform Account Opening, Transfers, Open New Deposit, UPI, Bill Payments etc."
        BulletPoints2="Development work included building, implementing the UI/UX based on the design and achieving the banking functionalities."
        BulletPoints3="Worked in Dierent Browsers to achieve the Requirement."
      />
      <ProjectDetails
        companyname="Equitas Bank AOS Application, INDIA"
        dateDetails="Jan 2017-Mar 2018"
        technicalrelated="Technical Skills Used: ReactJS, NodeJS, Redux, MongoDB, MySQL, Rest API’s,Postman, Html, CSS, Bootstrap"
        BulletPoints1="Account Opening Application serves for Account Opening Purpose where Bank Users can open an Account for Customer. "
        BulletPoints2=" Delivered the Application with the best Quality driven and with best User Experience for bank users."
        BulletPoints3=" Worked on Login Screen, Navigations, OTP Timer, MPIN, API Calls to External Systems."
      />
      <p style={projectstyle}>Academic Projects</p>
      <ProjectDetails
        companyname="PREDICT DISEASE CLASSES USING GENETIC DATA "
        dateDetails="May 2020-Aug 2020"
        technicalrelated="Technical Skills Used:  Python, Pandas, NumPy, KNN Algorithm, Classication Techniques"
        BulletPoints1="Built a method that uses genetic data (extracted from a DNA) for disease classication. "
        BulletPoints2="Preprocessed and performed data analysis to identify correlation between features."
        BulletPoints3="Implemented KNN algorithms to develop the model and achieved 89 % accuracy."
      />
    </>
  );
}

export default Projects;
