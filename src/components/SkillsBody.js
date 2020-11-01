import React from "react";
import { Typography, Image } from "antd";
import "./about-me.css";

const { Text, Title } = Typography;

function SkillsBody({ title, skillstext, imagedetails }) {
  return (
    <div
      style={{
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Title style={{ color: "#00DBFF", paddingBottom: "20px" }} level={5}>
        {title}
      </Title>
      <div className="image-center">
        <Image
          width={120}
          src={imagedetails}
          style={{ paddingBottom: "10px" }}
        />
      </div>

      <div style={{ width: "350px" }}>
        <Text style={{ padding: "20px 20px" }}>{skillstext}</Text>
      </div>
    </div>
  );
}

export default SkillsBody;
