import React from 'react';
import aboutimg from '../../assets/images/webp/about-6.webp';

const AboutFreelance = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start px-6 md:px-12 lg:px-20 py-16 md:py-24 gap-10">

            {/* Text Section */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-semibold pb-6 md:pb-10">
                    A whole world of freelance talent at your fingertips
                </h2>

                {[
                    { icon: "⭐", title: "Proof of quality", text: "Check any pro’s work samples, client reviews, and identity verification." },
                    { icon: "💰", title: "No cost until you hire", text: "Interview potential fits for your job, negotiate rates, and only pay for work you approve." },
                    { icon: "🛡️", title: "Safe and secure", text: "Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it." }
                ].map((item, index) => (
                    <div key={index} className="flex py-3 items-start space-x-4">
                        <span className="text-green-700 text-2xl">{item.icon}</span>
                        <div className="text-left">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    </div>
                ))}

            </div>

            {/* Image Section */}
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
                <img src={aboutimg} alt="Freelance Talent" className="w-full h-auto object-cover rounded-lg" />
            </div>

        </div>
    );
}

export default AboutFreelance;
