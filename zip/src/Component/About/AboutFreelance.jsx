import React from 'react'
import aboutimg from '../../assets/images/webp/about-6.webp'

const AboutFreelance = () => {
  return (
    <div className='flex'>
      
      <div className=" space-y-6   pl-20 pr-52 py-32 gap-10 rounded-3xl ">
                    <h2 className="text-4xl font-semibold pb-10">
                        A whole world of freelance talent at your fingertips
                    </h2>

                    {[
                        { icon: "⭐", title: "Proof of quality", text: "Check any pro’s work samples, client reviews, and identity verification." },
                        { icon: "💰", title: "No cost until you hire", text: "Interview potential fits for your job, negotiate rates, and only pay for work you approve." },
                        { icon: "🛡️", title: "Safe and secure", text: "Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it." }
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
                <div className="img w-[900px]">
                    <img src={aboutimg} alt="" className='w-full' />
                </div>
    </div>
  )
}

export default AboutFreelance
