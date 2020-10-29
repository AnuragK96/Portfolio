import React, { Component } from "react";
import { Layout, Menu, Typography, PageHeader, Divider } from "antd";
import { Link } from "@reach/router";
import TextScroller from "../components/TextScroller";
const { Content, Footer } = Layout;

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
    };
  }
  handleClick = (e) => {
    this.setState({ current: e.key });
  };
  render() {
    const { Component, ...rest } = this.props;
    const { current } = this.state;
    return (
      <>
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="MR"
          extra={[
            <Menu
              theme="light"
              onClick={this.handleClick}
              mode="horizontal"
              selectedKeys={[current]}
            >
              <Menu.Item key="covid">
                <Link to="/covid19cases">COVID CASES</Link>
              </Menu.Item>
              <Menu.Item key="home">
                <Link to="/">HOME</Link>
              </Menu.Item>
              <Menu.Item key="education">
                <Link to="/education">EDUCATION</Link>
              </Menu.Item>
              <Menu.Item key="projects">
                <Link to="/projects">PROJECTS</Link>
              </Menu.Item>
              <Menu.Item key="skills">
                <Link to="/skills">SKILLS</Link>
              </Menu.Item>
              <Menu.Item key="contact">
                <Link to="/contact">CONTACT</Link>
              </Menu.Item>
            </Menu>,
          ]}
        >
          <Content style={{ padding: "50px 0px " }}>
            <Component {...rest} />
          </Content>
          <Divider />
          <Footer>
            <TextScroller text="Now switch the tabs to know me Better" />
          </Footer>

          <Divider />
        </PageHeader>
      </>
    );
  }
}

export default NavBarComponent;
