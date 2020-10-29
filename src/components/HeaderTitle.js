import React from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";

const { Title } = Typography;

function HeaderTitle({ name, subname }) {
  return (
    <div style={{ backgroundColor: "#A7A493", padding: "100px" }}>
      <Title
        style={{ color: "#1167b1	", fontFamily: "sans-serif", fontSize: "36px" }}
      >
        {name}
      </Title>
      {subname && (
        <Title level={3} style={{ fontFamily: "serif" }}>
          {subname}
        </Title>
      )}
    </div>
  );
}

HeaderTitle.propTypes = {
  name: PropTypes.string.isRequired,
  subname: PropTypes.string.isRequired,
};
export default HeaderTitle;
