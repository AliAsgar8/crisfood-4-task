import React from "react";
import { FaBriefcase, FaUserTie, FaShieldAlt, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: <FaBriefcase className="text-3xl " />,
    title: "Post a job",
    description: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: <FaUserTie className=" text-3xl " />,
    title: "Choose freelancers",
    description: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: <FaShieldAlt className=" text-3xl " />,
    title: "Pay safely",
    description: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: <FaHeadset className=" text-3xl" />,
    title: "We’re here to help",
    description: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 text-center pt-32">
      <h2 className="text-3xl font-semibold mb-2 ">Need something done?</h2>
      <p className="text-gray-500 mb-12 pb-10">
        Most viewed and all-time top-selling services
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center hover:">
            <div className="border border-gray-200 h-[100px] w-[100px] flex justify-center items-center rounded-full">{service.icon}</div>
            <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
