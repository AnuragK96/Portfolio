import React from "react";
import { Typography } from "antd";
import "./about-me.css";

const { Title, Text } = Typography;

function ProjectsTitle({ companyname, role, dateDetails }) {
  return (
    <div className="page-title-style">
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Title style={{ fontFamily: "serif" }} level={5}>
          {companyname}
        </Title>
        {role && (
          <Text style={{ fontSize: "18px", fontFamily: "serif" }}>{role}</Text>
        )}
      </div>
      <div>
        <Text>{dateDetails}</Text>
      </div>
    </div>
  );
}

export default ProjectsTitle;
