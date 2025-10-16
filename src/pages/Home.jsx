import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateBtn />
    </div>
  )
}

export default Home