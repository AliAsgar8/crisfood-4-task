import React from "react";
import { FaArrowRight, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <div className=" px-4 sm:px-8 md:px-16 lg:px-[100px] py-12">
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Keep In Touch With Us.
            </h2>
            <p className="text-gray-600 mt-2">
              Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis.
            </p>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <FaMapMarkerAlt className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    328 Queensberry Street, North Melbourne VIC 3051, Australia.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <FaPhone className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+(O) 392 94 03 01</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <FaEnvelope className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">hello@OptimIQ.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative  top-0 lg:top-[-200px] lg:right-[-100px] bg-[#FFFFFF] px-6 sm:px-10 md:px-14 py-10 border-2 border-gray-200 rounded-2xl w-full max-w-lg mx-auto">
            <h2 className="text-2xl md:text-2xl font-semibold text-gray-900">Tell us about yourself</h2>
            <p className="text-gray-600 mt-5">
              Whether you have questions or you would just like to say hello, contact us.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium pb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring focus:ring-green-300 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium pb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border border-gray-200 rounded-md focus:ring focus:ring-green-300 outline-none"
                  />
                </div>
              </div>

              <label className="block text-gray-700 font-medium pb-3">Message</label>
              <textarea
                name="message"
                placeholder="Description"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring focus:ring-green-300 outline-none min-h-[150px] resize-y"
              />

              <button
                type="submit"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-all"
              >
                <span>Send Message</span>
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] my-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509347!2d144.95373631531576!3d-37.81627927975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774bc5f45dd1b4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1642680071817!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default GetInTouch;
