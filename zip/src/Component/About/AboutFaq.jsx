import React, { useState } from "react";
// import arrow from "../assets/images/png/arrow.png";

const faqData = [
    {
        question: "Do I need prior experience with breathing exercises to use the CapnoTrainer GO?",
        answer: "BreatheMatters is a holistic wellness brand dedicated to improving respiratory health",
    },
    {
        question: "Is it safe to use for health conditions like asthma or anxiety?",
        answer: "Yes! It's user-friendly and includes guided instructions to help you get started.",
    },
    {
        question: "How do I get started?",
        answer: "For best results, we recommend using it for at least 10-15 minutes per session.",
    },
];

const AboutFaq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold font-sans libre-baskerville-regular ">FAQs</h1>

            <div className="max-w-4xl mx-auto mt-12">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="cursor-pointer rounded-xl px-6 sm:px-8 py-4 transition-all duration-500 border border-teal-600 mb-4"
                    >
                        <div className="w-full flex justify-between items-center">
                            <h3 className="text-base sm:text-lg font-semibold text-teal-700">
                                {item.question}
                            </h3>
                            {/* Clickable Arrow - Expands Content */}
                        
                            <button  onClick={() => toggleFAQ(index)}
                                className={`transition-transform duration-300 cursor-pointer w-5 h-5 sm:w-6 sm:h-6 ${openIndex === index ? "rotate-180" : "rotate-0"
                                    }`}>+</button>
                        </div>

                        {/* Answer Section - Opens in the Same Div */}
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 opacity-100 pt-3" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-gray-700 text-sm sm:text-base">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutFaq;
