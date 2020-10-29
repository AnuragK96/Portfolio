import React, { useEffect } from 'react'
import { Typography } from 'antd'
import { Divider } from 'antd'
import AboutMe from '../components/AboutMe'
import HeaderTitle from '../components/HeaderTitle'

const { Title } = Typography

function Home () {
  useEffect(() => {
    document.title = 'MR-Home'
  })
  return (
    <>
      <HeaderTitle name='ANURAG KURAPATI' subname='HELLO, HOPE YOU ARE SAFE' />
      <Divider>
        <Title style={{ paddingTop: '20px', fontFamily: 'cursive' }} level={3}>
          ABOUT ME
        </Title>
      </Divider>
      <AboutMe />
    </>
  )
}

export default Home
