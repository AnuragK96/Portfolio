import React from "react";
import { Router } from "@reach/router";

import Home from "./Home";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Experience from "./Experience";
import NavBarComponent from "./NavBarComponent";
import MainCovidPage from "./MainCovidPage";

export default (
  <Router>
    <NavBarComponent path="/" Component={Home} />
    <NavBarComponent path="/projects" Component={Projects} />
    <NavBarComponent path="/experience" Component={Experience} />
    <NavBarComponent path="/education" Component={Education} />
    <NavBarComponent path="/skills" Component={Skills} />
    <NavBarComponent path="/contact" Component={Contact} />
    <NavBarComponent
      path="/covid19cases"
      Component={MainCovidPage}
      name="COVID19"
    />
  </Router>
);
