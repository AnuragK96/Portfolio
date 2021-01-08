import React, { useEffect } from "react";
import SkillsBody from "../components/SkillsBody";
import { Divider } from "antd";
import techdetails from "../images/web-techs.png";
import dataminingimage from "../images/data-mining.png";
import dbimage from "../images/db-tech.png";
import softmethodimage from "../images/soft-methods.png";

function Skills() {
  useEffect(() => {
    document.title = "AK-Skills";
  });
  return (
    <>
      <div
        style={{
          padding: "30px 20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <SkillsBody
          title="Data Mining"
          imagedetails={dataminingimage}
          skillstext="Data Pre-processing | Data Mining | Decision Trees | Classification Methods | Clustering Analysis | Frequent Pattern Mining"
        />
        <Divider
          type="vertical"
          style={{ height: "155px" }}
          className="divider-style"
        />

        <SkillsBody
          title="Web Technologies"
          imagedetails={techdetails}
          skillstext="ReactJS | NodeJS | Redux | PHP | Javascript | CSS3 | HTML5 | Bootstrap | JSON | JQuery | Lavarel | Java | Python | C |"
        />
        <Divider
          type="vertical"
          style={{ height: "155px" }}
          className="divider-style"
        />

        <SkillsBody
          title="Database Technologies"
          imagedetails={dbimage}
          skillstext="MySQL | MongoDB | PostgreSQL"
        />
        <Divider
          type="vertical"
          style={{ height: "155px" }}
          className="divider-style"
        />
        <SkillsBody
          title="Software Methodologies"
          imagedetails={softmethodimage}
          skillstext="SDLC | Agile and Scrum Methodologies | Software Documentation"
        />
        <Divider
          type="vertical"
          style={{ height: "155px" }}
          className="divider-style"
        />
      </div>
    </>
  );
}

export default Skills;
