import React from 'react'
import Navbar from '../Component/Navbar'
import LandingPage from '../Component/Home/LandingPage'
import FreelanceSection from '../Component/Home/FreelanceSection'
import ServicesSection from '../Component/Home/ServicesSection'
import TestimonialSlider from '../Component/Home/TestimonialSlider'
import Inspiration from '../Component/Home/Inspiration'

const Home = () => {
  return (
    <>

    <div className='background'>
      <Navbar/>
      <LandingPage/>
    </div>
      {/* <ServicesSection/> */}
      {/* <FreelanceSection/> */}
      {/* <TestimonialSlider/> */}
      {/* <Inspiration/> */}
    </>
  )
}

export default Home
