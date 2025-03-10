import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ServicesSection from './Component/Home/ServicesSection'
import FreelanceSection from './Component/Home/FreelanceSection'

import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Contact from './Pages/Contact'
import Home from '../src/Pages/Home'
import AboutUs from './Pages/AboutUs'


const App = () => {
  return (
    <Router>
      <div className=''>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
