import React, { useEffect } from "react";
import { Typography } from "antd";
import { Divider } from "antd";
import AboutMe from "../components/AboutMe";

const { Title } = Typography;

function Home() {
  useEffect(() => {
    document.title = "AK-Home";
  });
  return (
    <>
      <Divider>
        <Title style={{ paddingTop: "20px", fontFamily: "cursive" }} level={3}>
          ABOUT ME
        </Title>
      </Divider>
      <AboutMe />
    </>
  );
}

export default Home;
