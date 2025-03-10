import React from "react";
import landingImage from '../../assets/images/webp/about-1.webp'
import happyClient from '../../assets/images/webp/happy-client.webp'

const AboutusLandingPage = () => {
  return (
    <>

    
    <section className="min-h-screen flex flex-col justify-center bg-[#204C40] text-white pt-52  px-[70px] ">
      <div className=" flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Find the perfect freelance <br /> services for your business
          </h1>
          <p className="mt-4 text-gray-300 w-[500px]">
            Work with talented people at the most affordable price to get the most
            out of your time and cost.
          </p>

          {/* Search Bar */}
          <div className=" z-40 mt-6 flex bg-white rounded-full p-2 items-center shadow-md">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full p-3 text-gray-700 rounded-l-full focus:outline-none"
            />
            <select className="bg-transparent px-4 text-gray-700 border-l border-gray-300 focus:outline-none">
              <option>Choose Category</option>
            </select>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full ml-2 hover:bg-green-600 transition">
              Search
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-8 flex flex-wrap gap-6">
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
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative top-[-50px]">
          <img
            src={landingImage}
            alt="Freelancer"
            className="w-full rounded-lg shadow-lg"
          />
          {/* Floating Cards */}
          <div className="animate-infinite-translate absolute top-40 left-40 bg-white p-4 shadow-md rounded-lg flex items-center">
            <span className="bg-green-500 text-white p-2 rounded-full">✔</span>
            <p className="ml-2 text-gray-700">Proof of quality</p>
          </div>
          <div className="animate-infinite-translate absolute bottom-10 right-10 bg-white p-4 shadow-md rounded-lg flex items-center w-1/2">
            <img src={happyClient} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
    
      
</>
  );
};

export default AboutusLandingPage;
