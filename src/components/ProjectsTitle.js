import React from "react";
import { Typography } from "antd";
import "./about-me.css";
import { Image } from "antd";
const { Title, Text } = Typography;

function ProjectsTitle({ companyname, role, dateDetails, photodetails, proj }) {
  return (
    <div className="page-title-style">
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Title style={{ fontFamily: "serif", fontSize: "18px" }} level={5}>
          {!proj && (
            <Image
              width={100}
              src={photodetails}
              style={{ paddingRight: "10px" }}
            />
          )}
          {companyname}
        </Title>
        {role && (
          <Text style={{ fontSize: "18px", fontFamily: "serif" }}>{role}</Text>
        )}
      </div>
      <div>
        <Title level={5}>{dateDetails}</Title>
      </div>
    </div>
  );
}

export default ProjectsTitle;
