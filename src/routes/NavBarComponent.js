import React, { Component } from "react";
import { Layout, Typography, PageHeader, Divider } from "antd";
import { Link } from "@reach/router";
import HeaderTitle from "../components/HeaderTitle";
import TextScroller from "../components/TextScroller";
import Menu from "./Menu.js";
const { Content, Footer } = Layout;
const { Title } = Typography;
const propStyle = {
  backgroundImage:
    "url(//cdn2.editmysite.com/images/editor/theme-background/stock/Windy-Ocean.jpg)",
  height: "486px",
};
class NavBarComponent extends Component {
  render() {
    const { Component, ...rest } = this.props;
    return <Component {...rest} />;
  }
}

export default NavBarComponent;
