import React from "react";
import { Divider } from "antd";
import ProjectsTitle from "./ProjectsTitle";
import ProjectBody from "./ProjectBody";
import "./about-me.css";

function ExperienceDetails({
  companyname,
  role,
  dateDetails,
  technicalrelated,
  BulletPoints1,
  BulletPoints2,
  photodetails,
}) {
  return (
    <div className="media-aline">
      <Divider plain />
      <ProjectsTitle
        companyname={companyname}
        role={role}
        dateDetails={dateDetails}
        photodetails={photodetails}
      />
      <ProjectBody
        technicalrelated={technicalrelated}
        BulletPoints1={BulletPoints1}
        BulletPoints2={BulletPoints2}
      />
    </div>
  );
}

export default ExperienceDetails;
