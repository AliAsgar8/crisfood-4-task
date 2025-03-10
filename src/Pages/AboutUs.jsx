import React from 'react'
import AboutusLandingPage from '../Component/About/AboutusLandingPage'
import MarketplaceSection from '../Component/About/MarketPlaceSection'
import AboutFreelance from '../Component/About/AboutFreelance'
import BusinessGrowthSection from '../Component/About/BusinessGrowthSection'
import Navbar from '../Component/Navbar'
import AboutFaq from '../Component/About/AboutFaq'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <AboutusLandingPage />
      <MarketplaceSection />
      <AboutFreelance />
      <BusinessGrowthSection />
      <AboutFaq />
    </div>
  )
}

export default AboutUs
