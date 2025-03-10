import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import testimonial1 from '../../assets/images/webp/testimonial-1.webp'
import testimonial2 from '../../assets/images/webp/testimonial-2.webp'
import testimonial3 from '../../assets/images/webp/testimonial-3.webp'
import testimonial4 from '../../assets/images/webp/testimonial-4.webp'

const testimonials = [
  { name: "Robert Fox", role: "Scrum Master", img: testimonial1},
  { name: "Floyd Miles", role: "Software Developer", img: testimonial2 },
  { name: "Brooklyn Simmons", role: "Software Tester", img: testimonial3 },
  { name: "Jane Cooper", role: "UI/UX Designer", img: testimonial4 },
];

// console.log("testimonial1", testi);


const TestimonialSlider = () => {
  const [data, setData] = useState(testimonials);

  const nextSlide = () => {
    setData((prev) => [...prev.slice(1), prev[0]]); // Move first to last
  };

  const prevSlide = () => {
    setData((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]); // Move last to first
  };

  return (
    <div className="relative w-full  px-[70px] bg-[#222222] pb-36 mb-20 ">
    <div className="pt-28 pb-20" >

    <h1 className="text-white text-4xl leading-16 font-semibold">Highest Rated Freelancers</h1>
    <p className="text-white">Most viewed and all-time top-selling services</p>
    </div>
      <div className="flex items-center justify-between relative ">
        {/* Left Arrow */}
        <button onClick={prevSlide} className="p-3 absolute h-14 w-14 left-[-30px] flex justify-center items-center z-30 bg-white rounded-full shadow-lg hover:scale-110 transition">
          <FaChevronLeft size={24} />
        </button>

        {/* Cards Row */}
        <div className="flex gap-6 overflow-hidden">
          {data.map((testimonial, i) => (
            <div key={i} className="w-[320px] h-[500px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-gray-800 relative">
            <div>

              <img src={testimonial.img} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-300 text-sm">{testimonial.role}</p>
                <div className="flex items-center gap-1 text-yellow-400 mt-2">
                  <FaStar size={16} /> 4.9
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={nextSlide} className="p-3 absolute right-0 h-14 w-14 flex justify-center items-center bg-green-500 rounded-full shadow-lg hover:scale-110 transition">
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
