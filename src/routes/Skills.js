import React, { useEffect } from "react";
import HeaderTitle from "../components/HeaderTitle";
import SkillsBody from "../components/SkillsBody";
import { Divider } from "antd";

function Skills() {
  useEffect(() => {
    document.title = "MR-Skills";
  });
  return (
    <>
      <HeaderTitle name="SKILLS" />
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
          skillstext="Data Pre-processing | Data Mining | Decision Trees | Classification Methods | Clustering Analysis | Frequent Pattern Mining"
        />
        <Divider
          type="vertical"
          style={{ height: "155px" }}
          className="divider-style"
        />

        <SkillsBody
          title="Data Mining"
          skillstext="Data Pre-processing | Data Mining | Decision Trees | Classification Methods | Clustering Analysis | Frequent Pattern Mining"
        />
        <Divider
          type="vertical"
          style={{ height: "155px" }}
          className="divider-style"
        />

        <SkillsBody
          title="Data Mining"
          skillstext="Data Pre-processing | Data Mining | Decision Trees | Classification Methods | Clustering Analysis | Frequent Pattern Mining"
        />
        <Divider
          type="vertical"
          style={{ height: "155px" }}
          className="divider-style"
        />
        <SkillsBody
          title="Data Mining"
          skillstext="Data Pre-processing | Data Mining | Decision Trees | Classification Methods | Clustering Analysis | Frequent Pattern Mining"
        />
        <Divider
          type="vertical"
          style={{ height: "155px" }}
          className="divider-style"
        />
        <SkillsBody
          title="Data Mining"
          skillstext="Data Pre-processing | Data Mining | Decision Trees | Classification Methods | Clustering Analysis | Frequent Pattern Mining"
        />
        <Divider
          type="vertical"
          style={{ height: "155px" }}
          className="divider-style"
        />
        <SkillsBody
          title="Data Mining"
          skillstext="Data Pre-processing | Data Mining | Decision Trees | Classification Methods | Clustering Analysis | Frequent Pattern Mining"
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
