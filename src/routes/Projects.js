import React, { useEffect } from "react";
import HeaderTitle from "../components/HeaderTitle";
import ProjectDetails from "../components/ProjectDetails";

function Projects() {
  useEffect(() => {
    document.title = "MR-Projects";
  });
  return (
    <>
      <HeaderTitle name="PROJECTS" />
      <p
        style={{
          fontFamily: "serif",
          paddingTop: "20px",
          fontSize: "44px",
        }}
      >
        Professional Projects
      </p>
      <ProjectDetails
        companyname="COGNIZANT TECHNOLOGY SOLUTIONS, India"
        role="PROGRAM ANALYST "
        dateDetails="Nov 2017-June 2019"
        technicalrelated="Technical Skills Used: Java, Spring boot, JDBC, React, MySQL, Rest API’s, Postman, JUnit, Jenkins, Maven"
        BulletPoints1="Developing a web-based application for a financial services company that offers personal, commercial, and consumer insurances."
        BulletPoints2="Developed a micro service architecture based commercial web application that can be configured and used by financial services company to manage their corporate/business accounts using rest API’s."
      />
      <ProjectDetails
        companyname="COGNIZANT TECHNOLOGY SOLUTIONS, India"
        role="PROGRAM ANALYST "
        dateDetails="Nov 2017-June 2019"
        technicalrelated="Technical Skills Used: Java, Spring boot, JDBC, React, MySQL, Rest API’s, Postman, JUnit, Jenkins, Maven"
        BulletPoints1="Developing a web-based application for a financial services company that offers personal, commercial, and consumer insurances."
        BulletPoints2="Developed a micro service architecture based commercial web application that can be configured and used by financial services company to manage their corporate/business accounts using rest API’s."
      />
      <p
        style={{
          fontFamily: "serif",
          paddingTop: "20px",
          fontSize: "44px",
        }}
      >
        Academic Projects
      </p>
      <ProjectDetails
        companyname="COGNIZANT TECHNOLOGY SOLUTIONS, India"
        role="PROGRAM ANALYST "
        dateDetails="Nov 2017-June 2019"
        technicalrelated="Technical Skills Used: Java, Spring boot, JDBC, React, MySQL, Rest API’s, Postman, JUnit, Jenkins, Maven"
        BulletPoints1="Developing a web-based application for a financial services company that offers personal, commercial, and consumer insurances."
        BulletPoints2="Developed a micro service architecture based commercial web application that can be configured and used by financial services company to manage their corporate/business accounts using rest API’s."
      />
    </>
  );
}

export default Projects;
