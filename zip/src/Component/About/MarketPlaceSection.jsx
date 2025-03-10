import React from "react";
import marketplaceimg from '../../assets/images/webp/about-1.webp'

const MarketplaceSection = () => {
    return (
        <section className=" px-6 md:px-20 py-32 bg-white " >
     
        <div className="flex flex-col md:flex-row items-center justify-between">

       
            {/* Left Side - Images */}
            <div className="flex gap-4">
                <img src={marketplaceimg} alt="" />
            </div>

            {/* Right Side - Content */}
            <div className="mt-10 md:mt-0 md:ml-10 max-w-lg">
                <h2 className="text-3xl font-bold text-gray-900">
                    Join World's Best Marketplace for Workers
                </h2>
                <p className="mt-4 text-gray-600">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, making it look like readable English.
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                    <li className="flex items-center">
                        ✅ Connect to freelancers with proven business experience
                    </li>
                    <li className="flex items-center">
                        ✅ Get matched with the perfect talent by a customer success manager
                    </li>
                    <li className="flex items-center">
                        ✅ Unmatched quality of remote, hybrid, and flexible jobs
                    </li>
                </ul>
                <button className="mt-6 px-6 py-3 bg-white border border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-600 transition">
                    Find Talent →
                </button>
            </div>
            </div>
            <div className="freelance flex items-center justify-between px-36 pt-20">
            {[
                {number:834, title:"Total Freelance"},
                {number:834, title:"Total Freelance"},
                {number:834, title:"Total Freelance"},
                {number:834, title:"Total Freelance"},
            ].map((curr,index) => {
                return(


                <div key={index} className="">
                    <p className="font-semibold text-[40px]">{curr.number}M</p>
                    <p>{curr.title}</p>
                </div>
                )
            })}
            </div>
        </section>
            
    );
};

export default MarketplaceSection;
