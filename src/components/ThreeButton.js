import React from "react";
import { Typography } from "antd";
import "./about-me.css";
const { Text } = Typography;

function ThreeButton({ name1, name2, name3 }) {
  return (
    <>
      <Text className="button-style">{name1}</Text>
      <Text className="button-style">{name2}</Text>
      <Text className="button-style">{name3}</Text>
    </>
  );
}

export default ThreeButton;
