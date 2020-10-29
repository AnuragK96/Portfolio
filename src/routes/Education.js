import React, { useEffect } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import LayoutEducation from '../components/LayoutEducation'
import { Divider } from 'antd'
import MastersDetails from '../components/MastersDetails'
import amrita from '../images/amrita.jpg'
import bishops from '../images/bishops.jpeg'

function Education () {
  useEffect(() => {
    document.title = 'MR-Education'
  })
  return (
    <>
      <HeaderTitle name='EDUCATION' />
      <LayoutEducation
        universityname='Bishop’s University, Sherbrooke, Quebec'
        coursedetails='Masters - Computer Science 2020'
        imagedetails={bishops}
      >
        <MastersDetails
          title='COURSES : '
          description='Software Engineering | Database Theory | Machine Learning |
          Intelligent Data Analysis | Advanced SE'
        />
      </LayoutEducation>
      <Divider />
      <LayoutEducation
        universityname='Amrita Vishwa Vidyapeetham University'
        coursedetails='Bachelors of Technology in Electronics and Communication'
        imagedetails={amrita}
      >
        <MastersDetails
          title='ACHIEVEMENTS : '
          description='Hold the credit of consistently being among the top five positions during the sixth and Seventh semester of B.E.'
        />
      </LayoutEducation>
    </>
  )
}

export default Education
