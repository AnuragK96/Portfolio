import React from "react";
import { Typography, Image } from "antd";
import PropTypes from "prop-types";

const { Title } = Typography;

function LayoutEducation({
  universityname,
  coursedetails,
  imagedetails,
  children,
}) {
  return (
    <div style={{ paddingTop: "30px" }} className="layout-css">
      <Image width={80} src={imagedetails} style={{ paddingBottom: "10px" }} />
      <Title level={2}>{universityname}</Title>
      <Title level={4}>{coursedetails}</Title>
      <>{children}</>
    </div>
  );
}

LayoutEducation.propTypes = {
  universityname: PropTypes.string,
  coursedetails: PropTypes.number,
  imagedetails: PropTypes.node,
  children: PropTypes.object,
};
export default LayoutEducation;
