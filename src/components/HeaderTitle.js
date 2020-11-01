import React from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";

const { Title } = Typography;

function HeaderTitle({ name, subname }) {
  return (
    <div style={{ padding: "90px", paddingTop: "10px" }}>
      <Title
        style={{
          color: "#FFFFFF",
          fontFamily: "Quicksand",
          fontSize: "60px",
          fontWeight: "100",
          textAlign: "center",
        }}
      >
        {name}
      </Title>
      {subname && (
        <Title level={3} style={{ fontStyle: "italic", textAlign: "center" }}>
          {subname}
        </Title>
      )}
    </div>
  );
}

HeaderTitle.propTypes = {
  name: PropTypes.string.isRequired,
  subname: PropTypes.string,
};
export default HeaderTitle;
