import React from 'react'
import ContactUs from '../Component/Contact/ContactUs'
import Navbar from '../Component/Navbar'
import GetInTouch from '../Component/Contact/GetInTouch'
import AboutFaq from '../Component/About/AboutFaq'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <GetInTouch/>
      <AboutFaq/>
    </div>
  )
}

export default Contact
