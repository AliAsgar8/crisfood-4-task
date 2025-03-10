import React from "react";
import inspiration1 from '../../assets/images/webp/pro-1.webp'
import inspiration2 from '../../assets/images/webp/pro-2.webp'
import inspiration3 from '../../assets/images/webp/pro-3.webp'
import inspiration4 from '../../assets/images/webp/pro-4.webp'

const inspirations = [
  { title: "Caricatures", image: inspiration1, author: "Ali Tufan" },
  { title: "Product Photography", image: inspiration2, author: "Ali Tufan" },
  { title: "UI Design", image: inspiration3, author: "Ali Tufan" },
  { title: "App Design", image: inspiration4, author: "Ali Tufan" },
];

const Inspiration = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-12">
      {/* Heading Section */}
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Inspiring work made on OptimIQ</h2>
          <p className="text-gray-500 text-sm md:text-base">Get some inspirations from 1800+ skills</p>
        </div>
        <a href="#" className="text-gray-600 hover:text-black flex items-center text-sm md:text-base">
          See more →
        </a>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {inspirations.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-105 hover:rotate-2" 
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm">by {item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
