import React from "react";

const BusinessGrowthSection = () => {
  return (
    <section className="bg-[#FBF7ED] py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
      {/* Left Side - Text Content */}
      <div className="max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Find the talent needed to get your business growing.
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition flex items-center gap-2">
          Get Started ↗
        </button>
      </div>

      {/* Right Side - Stats Boxes */}
      <div className="mt-10 md:mt-0 flex justify-center items-center gap-4">
      <div className="flex flex-col gap-4 ">

        <div className="bg-white h-[230px] w-[270px] flex flex-col justify-center px-6 shadow-lg rounded-xl   text-center">
          <h3 className="text-3xl font-bold text-gray-900">4.9/5</h3>
          <p className="text-gray-600 mt-2">Clients rate professionals on OptimIQ</p>
        </div>

        <div className="bg-white h-[230px] w-[270px]  flex flex-col justify-center  shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Award</h3>
          <p className="text-gray-600 mt-2">G2’s 2021 Best Software Awards</p>
        </div>
      </div>

        <div className="bg-white h-[230px] w-[270px]  flex flex-col justify-center  shadow-lg rounded-xl  text-center ">
          <h3 className="text-4xl font-bold text-gray-900">96%</h3>
          <p className="text-gray-600 mt-2">95% of customers are satisfied through to see their freelancers</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowthSection;
