import React from "react";
import topleft from '../../assets/images/webp/left-top.webp';
import bottomright from '../../assets/images/webp/right-bottom.webp';

const BusinessGrowthSection = () => {
  return (
    <section className="bg-[#FBF7ED] relative py-16 px-6 md:px-12 lg:px-20">
      
      {/* Top Left Decoration */}
      <div className="absolute top-0 left-0 w-20 md:w-32">
        <img src={topleft} alt="Decoration" className="w-full h-auto" />
      </div>

      {/* Main Content Grid */}
      <div className="container justify-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text Content */}
        <div className="max-w-lg flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Find the talent needed to get your business growing.
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition flex items-center justify-center md:justify-start gap-2">
            Get Started ↗
          </button>
        </div>

        {/* Right Side - Stats Boxes */}
        <div className="flex flex-col items-center md:flex-row gap-6 justify-center md:justify-end">
          {/* Left Column */}
          <div className="flex flex-col gap-6 justify-center items-center">
            <div className="bg-white h-[230px] w-full max-w-[270px] flex flex-col justify-center px-6 shadow-lg rounded-xl text-center">
              <h3 className="text-3xl font-bold text-gray-900">4.9/5</h3>
              <p className="text-gray-600 mt-2">Clients rate professionals on OptimIQ</p>
            </div>

            <div className="bg-white h-[230px] w-full max-w-[270px] flex flex-col justify-center shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">Award</h3>
              <p className="text-gray-600 mt-2">G2’s 2021 Best Software Awards</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white h-[230px] w-full max-w-[270px] flex flex-col justify-center items-center shadow-lg rounded-xl text-center">
            <h3 className="text-4xl font-bold text-gray-900">96%</h3>
            <p className="text-gray-600 mt-2">95% of customers are satisfied through to see their freelancers</p>
          </div>
        </div>
      </div>

      {/* Bottom Right Decoration */}
      <div className="absolute bottom-0 right-0 w-20 md:w-32">
        <img src={bottomright} alt="Decoration" className="w-full h-auto" />
      </div>

    </section>
  );
};

export default BusinessGrowthSection;
