import React, { useState, useContext } from "react";
import { Link } from "@reach/router";
import { ThemeContext } from "../../App";
const LinkProperty = {
  color: "#FFFFFF",
};
function LinkComponent({
  name,
  path,
  titlename,
  onCheckFunction,
  keyvalue,
  locationvalue,
}) {
  const locationPath = useContext(ThemeContext);
  return (
    <a
      name={name}
      id={name}
      href={path}
      style={{
        ...LinkProperty,
        padding: locationPath === path ? "10px" : "",
        border: locationPath === path ? "1px solid white" : "",
      }}
      onClick={(e) => onCheckFunction(e)}
    >
      {titlename}
    </a>
  );
}

export default LinkComponent;
