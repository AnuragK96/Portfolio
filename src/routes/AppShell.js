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

class AppShell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyvalue: 1,
    };
  }
  onCheckFunction = (e) => {
    this.setState({
      keyvalue: e.target.id,
    });
  };
  headerName = () => {
    const locationname = this.props.location.pathname;
    let headervalue = {
      name: "",
      subname: "",
    };
    if (locationname == "/") {
      headervalue.name = "ANURAG KURAPATI";
      headervalue.subname = "HELLO, HOPE YOU ARE SAFE";
    }
    if (locationname == "/contact") {
      headervalue.name = "CONTACT";
    }
    if (locationname == "/education") {
      headervalue.name = "EDUCATION";
    }
    if (locationname == "/skills") {
      headervalue.name = "SKILLS";
    }
    if (locationname == "/experience") {
      headervalue.name = "PROFESSIONAL EXPERIENCE";
    }
    if (locationname == "/projects") {
      headervalue.name = "PROJECTS";
    }
    if (locationname == "/covid19cases") {
      headervalue.name = "COVID19 CASES";
    }
    return headervalue;
  };
  render() {
    const styleProperty =
      this.props.location.pathname == "/"
        ? propStyle
        : { backgroundColor: "black" };
    return (
      <Layout
        style={{
          height: "100%",
        }}
      >
        <div style={styleProperty}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "30px",
            }}
          >
            <Title style={{ color: "white" }}>AR</Title>
            <Menu
              keyvalue={this.state.keyvalue}
              onCheckFunction={this.onCheckFunction}
            />
          </div>
          <HeaderTitle
            name={this.headerName().name}
            subname={this.headerName().subname}
          />
        </div>
        <Content style={{ padding: "40px 40px", backgroundColor: "white" }}>
          {this.props.children}
        </Content>
        <Footer style={{ backgroundColor: "white" }}>
          <Divider />
          <TextScroller style={{ fontWeight:"500px"}} text="Now switch the tabs to know me Better" />
          <Divider />
        </Footer>
      </Layout>
    );
  }
}

export default AppShell;
