import React from "react";
import marketplaceimg from '../../assets/images/webp/about-1.webp'

const MarketplaceSection = () => {
    return (
        <section className="px-6 md:px-20 py-32 bg-white">

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                {/* Left Side - Images */}
                <div className="flex justify-center w-full md:w-auto">
                    <img src={marketplaceimg} alt="" className="w-full max-w-sm md:max-w-md" />
                </div>

                {/* Right Side - Content */}
                <div className="mt-10 md:mt-0 md:ml-10 max-w-lg text-center md:text-left">
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
                        <li className="flex items-center justify-center md:justify-start">
                            ✅ Connect to freelancers with proven business experience
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                            ✅ Get matched with the perfect talent by a customer success manager
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                            ✅ Unmatched quality of remote, hybrid, and flexible jobs
                        </li>
                    </ul>
                    <button className="mt-6 px-6 py-3 bg-white border border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-600 transition">
                        Find Talent →
                    </button>
                </div>
            </div>

            {/* Stats Section */}
            <div className="freelance flex flex-wrap items-center justify-center sm:justify-between px-6 md:px-36 pt-20 gap-6 md:gap-0">
                {[
                    { number: 834, title: "Total Freelance" },
                    { number: 834, title: "Total Freelance" },
                    { number: 834, title: "Total Freelance" },
                    { number: 834, title: "Total Freelance" },
                ].map((curr, index) => (
                    <div key={index} className="text-center">
                        <p className="font-semibold text-[40px]">{curr.number}M</p>
                        <p>{curr.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MarketplaceSection;
