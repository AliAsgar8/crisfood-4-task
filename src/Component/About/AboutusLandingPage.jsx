import React from "react";
import landingImage from '../../assets/images/webp/about-1.webp';
import happyClient from '../../assets/images/webp/happy-client.webp';

const AboutusLandingPage = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center bg-[#204C40] text-white pt-32 md:pt-40 lg:pt-52 px-6 sm:px-10 md:px-16 lg:px-[70px]">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Find the perfect freelance <br className="hidden sm:block" /> services for your business
            </h1>
            <p className="mt-4 text-gray-300 max-w-[500px] mx-auto lg:mx-0">
              Work with talented people at the most affordable price to get the most out of your time and cost.
            </p>

            {/* Search Bar */}
            <div className="z-40 mt-6 flex bg-white rounded-full p-2 items-center shadow-md w-full max-w-lg mx-auto gap-2 sm:gap-0">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 p-3 text-gray-700 rounded-full sm:rounded-l-full focus:outline-none w-0 sm:w-auto min-w-[120px]"
              />
              <select className="bg-transparent px-4 text-gray-700 border-l border-gray-300 focus:outline-none hidden sm:block">
                <option>Choose Category</option>
              </select>
              <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
                Search
              </button>
            </div>


            {/* Statistics */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              <div>
                <h2 className="text-2xl font-bold">834M</h2>
                <p className="text-gray-300">Total Freelancers</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">732M</h2>
                <p className="text-gray-300">Positive Reviews</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">90M</h2>
                <p className="text-gray-300">Orders Received</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">236M</h2>
                <p className="text-gray-300">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
            <img
              src={landingImage}
              alt="Freelancer"
              className="w-full max-w-[450px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none mx-auto lg:mx-0 rounded-lg shadow-lg"
            />
            {/* Floating Cards */}
            <div className="animate-infinite-translate absolute top-10 w-36 md:w-48 sm:top-20 left-10 sm:left-20 bg-white p-2 md:p-4 shadow-md rounded-lg flex items-center">
              <span className="bg-green-500 text-white p-2   rounded-full">✔</span>
              <p className="ml-2 text-gray-700 text-xs md:text-xs">Proof of quality</p>
            </div>
            <div className="animate-infinite-translateY absolute bottom-5 sm:bottom-10 right-5 sm:right-10 bg-white p-4 shadow-md rounded-lg flex items-center w-2/4 md:w-1/2">
              <img src={happyClient} alt="Happy Client" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusLandingPage;
