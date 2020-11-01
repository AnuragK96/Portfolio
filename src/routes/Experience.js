import React, { useEffect } from "react";
import ExperienceDetails from "../components/ExperienceDetails.js";
import TAZZO from "../images/Tazzo.jpeg";
import IExceed from "../images/IExceed.jpg";
import Cgi from "../images/CGI-Inc.png";

function Experience() {
  useEffect(() => {
    document.title = "AK-Experience";
  });
  return (
    <>
      <ExperienceDetails
        companyname="CGI INC, CANADA"
        role="IT SERVICE TECHNICIAN"
        dateDetails="Mar 2020-Present"
        BulletPoints1="Diagnose, troubleshoot and resolve incidents or service requests reported by the client."
        BulletPoints2="Resolve technical problems in different Microsoft Windows Operating Systems."
        BulletPoints3="Worked extensively on analyzing, prioritizing, and fixing Issues within short span of time."
        photodetails={Cgi}
      />
      <ExperienceDetails
        companyname="I-EXCEED TECHNOLOGY SOLUTIONS, India"
        role="SOFTWARE ENGINEER"
        dateDetails="Jan 2017-July 2019"
        technicalrelated="Technical Skills Used: ReactJS, NodeJS, Redux, MongoDB, MySQL, Rest API’s,Postman, Html, CSS, Bootstrap"
        BulletPoints1="Design, develop and maintain web and mobile based applications employing various tools and technologies. "
        BulletPoints2="Developed a micro service architecture based commercial web application that can be configured and used by banks to manage their corporate/business accounts using rest API’s."
        BulletPoints3="Involved in various phases of Software Development Life Cycle (SDLC) such as requirements gathering, modelling, analysis, design, development, and testing."
        BulletPoints4="Built the backend web services to develop admin related modules using NodeJS"
        photodetails={IExceed}
      />
      <ExperienceDetails
        companyname="TAZZO TECHNOLOGY SOLUTIONS, India"
        role="SOFTWARE ENGINEER"
        dateDetails="Jan 2016-Jan 2017"
        technicalrelated="Technical Skills Used: ReactJS, NodeJS, Redux, MongoDB, Rest API’s,Postman, Html, CSS"
        BulletPoints1="Built a mobile application which can help users to book rental motorbikes based on location and allows users to track the availability of two wheelers at the nearest station."
        BulletPoints2="It also allows users to request for free delivery and pick ups, through mobile app."
        photodetails={TAZZO}
      />
    </>
  );
}

export default Experience;
