import React from "react";
import { Typography } from "antd";

const { Text, Title } = Typography;

function SkillsBody({ title, skillstext }) {
  return (
    <div
      style={{
        padding: "30px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Title style={{ color: "#00DBFF" }} level={4}>
        {title}
      </Title>
      <div style={{ width: "350px" }}>
        <Text style={{ padding: "20px 20px" }}>{skillstext}</Text>
      </div>
    </div>
  );
}

export default SkillsBody;
