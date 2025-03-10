import React, { useEffect, useState } from 'react';
import logo from '../assets/images/webp/logo.webp';
import logo2 from '../assets/images/webp/header-logo2.webp';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [color, setColor] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        setColor(window.scrollY >= 20);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={` fixed w-full z-50 transition-all duration-300 ${color ? 'bg-white shadow-md py-3' : 'py-5'}`}>
                <div className="header flex justify-between items-center px-6 md:px-16">
                    <div className="w-[150px]">
                        <img src={color ? logo2 : logo} alt="Logo" />
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="/" className={`relative ${color ? 'text-black' : 'text-white'} hover:text-[#4ade80] before:absolute before:-top-6 before:left-0 before:w-0 before:h-[2px] before:bg-[#4ade80] before:transition-all before:duration-300 hover:before:w-full`}>
                            Home
                        </a>

                        <div className=" group">
                            <a href="/services" className={`relative ${color ? 'text-black' : 'text-white'} hover:text-[#4ade80] before:absolute before:-top-6 before:left-0 before:w-0 before:h-[2px] before:bg-[#4ade80] before:transition-all before:duration-300 hover:before:w-full`}>
                                Services
                            </a>
                            <ul className="absolute top-20 right-64 hidden group-hover:block rounded-xl cursor-pointer text-black bg-white w-[250px] py-5 pl-8 shadow-lg">
                                <li className="pb-3">For Sellers</li>
                                <li>For Firms</li>
                            </ul>
                        </div>

                        <a href="/about" className={`relative ${color ? 'text-black' : 'text-white'} hover:text-[#4ade80] before:absolute before:-top-6 before:left-0 before:w-0 before:h-[2px] before:bg-[#4ade80] before:transition-all before:duration-300 hover:before:w-full`}>
                            About Us
                        </a>

                        <a href="/contact" className={`relative ${color ? 'text-black' : 'text-white'} hover:text-[#4ade80] before:absolute before:-top-6 before:left-0 before:w-0 before:h-[2px] before:bg-[#4ade80] before:transition-all before:duration-300 hover:before:w-full`}>
                            Contact
                        </a>

                        <div className="hidden md:flex items-center space-x-4">
                            <a href="/signin" className={`${color ? 'text-black' : 'text-white'} border border-gray-600 px-6 py-2 rounded-full hover:bg-gray-700 transition-colors`}>
                                Sign in
                            </a>
                            <a href="/join" className="px-6 py-2 bg-[#4ade80] rounded-full text-gray-800 font-medium hover:bg-[#3cce70] transition-colors">
                                Join
                            </a>
                        </div>
                    </nav>


                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-2xl text-black" onClick={() => setMenuOpen(!menuOpen)}>

                        {
                            menuOpen ? (
                                <FaTimes />
                            ) : (
                                color ? <FaBars className='text-black' /> : <FaBars className='text-white' />
                            )
                        }
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-[60%] z-50 h-full bg-white shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
                <button className="absolute top-9 right-6 text-2xl" onClick={() => setMenuOpen(false)}>
                    <FaTimes />
                </button>
                <nav className="flex flex-col items-center space-y-6 mt-20">
                    <a href="/" className="text-black text-lg hover:text-[#4ade80]">Home</a>
                    <a href="/services" className="text-black text-lg hover:text-[#4ade80]">Services</a>
                    <a href="/about" className="text-black text-lg hover:text-[#4ade80]">About Us</a>
                    <a href="/contact" className="text-black text-lg hover:text-[#4ade80]">Contact</a>
                    <a href="/signin" className="text-black border border-gray-600 px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">Sign in</a>
                    <a href="/join" className="px-6 py-2 bg-[#4ade80] rounded-full text-gray-800 font-medium hover:bg-[#3cce70] transition-colors">Join</a>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
