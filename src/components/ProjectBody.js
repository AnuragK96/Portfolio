import React from "react";
import { Typography } from "antd";
import "./about-me.css";

const { Text } = Typography;
function ProjectBody({ BulletPoints2, technicalrelated, BulletPoints1 }) {
  return (
    <div className="page-content-style">
      <Text style={{ fontSize: "18px", fontFamily: "serif" }}>
        {technicalrelated}
      </Text>
      <ul>
        <li className="text-related-property ">{BulletPoints1}</li>
        <li className="text-related-property ">{BulletPoints2}</li>
      </ul>
    </div>
  );
}

export default ProjectBody;
