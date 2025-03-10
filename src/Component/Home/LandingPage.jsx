import React from 'react'
import home1 from '../../assets/images/webp/home-1.webp'
import home2 from '../../assets/images/webp/home-2.webp'
import home3 from '../../assets/images/webp/home-3.webp'
import client from '../../assets/images/webp/happy-client-2.webp'
import quality from '../../assets/images/png/quality.png'

const LandingPage = () => {
  return (
    <div>
      <main className=" pt-[150px] pb-[150px] flex flex-col justify-center text-white overflow-hidden relative px-6 md:px-12 lg:px-[70px]">
        <section className="flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
              Hire Experts & Get Your Any Job Done
            </h1>
            <p className="text-gray-300 mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0">
              Work with talented people at the most affordable price to get the most out of your time and cost
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/find-work"
                className="px-6 md:px-8 py-3 bg-[#2a3b47] text-white rounded-full hover:bg-[#354857] transition-colors"
              >
                Find Work
              </a>
              <a
                href="/find-talent"
                className="px-6 md:px-8 py-3 bg-[#4ade80] text-gray-800 font-medium rounded-full hover:bg-[#3cce70] transition-colors"
              >
                Find Talent
              </a>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-center w-full lg:w-auto">
            <div className="flex gap-4">
              <div className="w-[200px] lg:w-[250px]">
                <img src={home1} alt="" className="w-full" />
              </div>
              <div className=" w-[200px] lg:w-[250px]">
                <img src={home2} alt="" className="w-full" />
              </div>
            </div>
            <div className=" w-[400px] lg:w-[500px] pt-5">
              <img src={home3} alt="" className="w-full" />
            </div>

            <div className="absolute   top-[60%] right-[50%] md:top-[63%] lg:top-96 lg:right-60 animate-infinite-translate">
              <img src={client} alt="" className="w-56 lg:w-auto" />
            </div>

            <div className='animate-infinite-translateY w-36 lg:w-[250px] absolute bottom-40 right-70  lg:bottom-40 lg:right-20'>
              <img src={quality} alt="" className='h-full w-full' />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
