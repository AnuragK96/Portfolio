import React, { Component } from "react";
import { Link } from "@reach/router";
import LinkComponent from "../components/Link/LinkComponent";

const property = {
  color: "rgb(255, 255, 255)",
  letterSpacing: "0.05em",
  padding: "10px 10px",
  fontSize: "12px",
  fontFamily: "Quicksand",
};

export default class Menu extends Component {
  render() {
    const { keyvalue, locationvalue } = this.props;
    return (
      <div>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            margin: "5px 5px 5px 0",
          }}
        >
          <li style={property} key="0">
            <LinkComponent
              name="0"
              path="/covid19cases"
              titlename="COVID CASES"
            />
          </li>
          <li style={property} key="1">
            <LinkComponent name="1" path="/" titlename="HOME" />
          </li>
          <li key="2" style={property}>
            <LinkComponent
              name="2"
              path="/education"
              titlename="EDUCATION"
              keyvalue={keyvalue}
            />
          </li>
          <li key="3" style={property}>
            <LinkComponent name="3" path="/experience" titlename="EXPERIENCE" />
          </li>
          <li key="4" style={property}>
            <LinkComponent name="4" path="/projects" titlename="PROJECTS" />
          </li>
          <li key="5" style={property}>
            <LinkComponent name="5" path="/skills" titlename="SKILLS" />
          </li>
          <li key="6" style={property}>
            <LinkComponent name="6" path="/contact" titlename="CONTACT" />
          </li>
        </ul>
      </div>
    );
  }
}
