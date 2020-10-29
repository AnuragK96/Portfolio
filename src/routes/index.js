import React from 'react'
import { Router } from '@reach/router'

import Home from './Home'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import NavBarComponent from './NavBarComponent'
import MainCovidPage from './MainCovidPage'

const Routes = () => (
  <Router>
    <NavBarComponent path='/' Component={Home} />
    <NavBarComponent path='/projects' Component={Projects} />
    <NavBarComponent path='/education' Component={Education} />
    <NavBarComponent path='/skills' Component={Skills} />
    <NavBarComponent path='/contact' Component={Contact} />
    <NavBarComponent path='/covid19cases' Component={MainCovidPage} />
  </Router>
)

export default Routes
