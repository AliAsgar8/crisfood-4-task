import React from "react";
import freelance from "../../assets/images/webp/freelance-img.webp";

const FreelanceSection = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center py-20 px-4 md:px-8">
        {/* Left Text Section */}
        <div className="space-y-6 bg-[#FEF7EE] p-6 md:p-12 lg:p-28 rounded-3xl w-full max-w-[1000px]">
          <h2 className="text-2xl md:text-4xl font-semibold pb-6 md:pb-10">
            A whole world of freelance talent at your fingertips
          </h2>
          {[
            {
              icon: "⭐",
              title: "Proof of quality",
              text: "Check any pro’s work samples, client reviews, and identity verification.",
            },
            {
              icon: "💰",
              title: "No cost until you hire",
              text: "Interview potential fits for your job, negotiate rates, and only pay for work you approve.",
            },
            {
              icon: "🛡️",
              title: "Safe and secure",
              text: "Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.",
            },
          ].map((item, index) => (
            <div key={index} className="flex py-3 items-start space-x-4">
              <span className="text-green-700 text-2xl">{item.icon}</span>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image Section */}
        <div className="relative top-5 lg:right-32 w-full max-w-md mt-10 lg:mt-0">
          <img
            src={freelance}
            alt="Freelancer"
            className="rounded-3xl shadow-lg w-full h-auto"
          />
          {/* Floating Dark Box */}
          <div className="absolute top-10 md:top-20 left-4 md:left-[-10px] bg-black text-white p-4 md:p-6 rounded-xl shadow-lg space-y-2 w-48 md:w-64">
            {[
              "The best for every budget",
              "Quality work done quickly",
              "Protected payments, every time",
              "24/7 support",
            ].map((text, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span>✔</span>
                <p className="text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12 lg:px-24 pb-16 text-center">
        {[
          { number: 834, title: "Total Freelance" },
          { number: 834, title: "Total Freelance" },
          { number: 834, title: "Total Freelance" },
          { number: 834, title: "Total Freelance" },
        ].map((curr, index) => (
          <div key={index}>
            <p className="font-semibold text-3xl md:text-4xl">{curr.number}M</p>
            <p className="text-sm md:text-base">{curr.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FreelanceSection;
