import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#222222] text-gray-300 py-10">
            <div className="container mx-auto px-6 sm:px-12 md:px-16">
                {/* Top Links */}
                <div className="flex flex-wrap justify-between items-center border-b border-gray-600 pb-6 gap-4">
                    <div className="flex flex-wrap space-x-6">
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Site Map</a>
                    </div>
                    <div className="flex flex-wrap space-x-4 items-center">
                        <span className="text-gray-400">Follow us</span>
                        <a href="#"><FaFacebook className="text-xl hover:text-white" /></a>
                        <a href="#"><FaTwitter className="text-xl hover:text-white" /></a>
                        <a href="#"><FaInstagram className="text-xl hover:text-white" /></a>
                        <a href="#"><FaLinkedin className="text-xl hover:text-white" /></a>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">About</h3>
                        <ul className="mt-3 space-y-2">
                            {["Careers", "Press & News", "Partnerships", "Privacy Policy", "Terms of Service", "Investor Relations"].map((item, index) => (
                                <li key={index}><a href="#" className="text-gray-300 hover:underline">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Categories</h3>
                        <ul className="mt-3 space-y-2">
                            {["Graphics & Design", "Digital Marketing", "Writing & Translation", "Video & Animation", "Music & Audio", "Programming & Tech", "Data", "Business", "Lifestyle"].map((item, index) => (
                                <li key={index}><a href="#" className="text-gray-300 hover:underline">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Support</h3>
                        <ul className="mt-3 space-y-2">
                            {["Help & Support", "Trust & Safety", "Selling on OptimIQ", "Buying on OptimIQ"].map((item, index) => (
                                <li key={index}><a href="#" className="text-gray-300 hover:underline">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe & Apps Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Subscribe</h3>
                        <div className="mt-3 flex bg-[#222222]">
                            <input type="email" placeholder="Your email address" className="w-full px-4 py-2 bg-[#222222] rounded-l-lg focus:outline-none border border-gray-600" />
                            <button className="bg-gray-700 px-4 py-2 rounded-r-lg hover:bg-gray-600">Send</button>
                        </div>

                        <h3 className="text-lg font-semibold text-white mt-6">Apps</h3>
                        <div className="mt-3 space-y-2">
                            <a href="#" className="flex items-center space-x-2">
                                <FaApple className="text-xl" />
                                <span>iOS App</span>
                            </a>
                            <a href="#" className="flex items-center space-x-2">
                                <FaGooglePlay className="text-xl" />
                                <span>Android App</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-wrap justify-between items-center border-t border-gray-600 pt-6 gap-4">
                    <p className="text-center w-full sm:w-auto">© OptimIQ Consultus. 2025. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <select className="bg-gray-800 px-4 py-2 rounded">
                            <option>US$ USD</option>
                        </select>
                        <select className="bg-gray-800 px-4 py-2 rounded">
                            <option>English</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
