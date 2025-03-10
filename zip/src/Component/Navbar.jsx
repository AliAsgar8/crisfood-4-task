import React, { useEffect, useState } from 'react'
import logo from '../assets/images/webp/logo.webp'
import logo2 from '../assets/images/webp/header-logo2.webp'

const Navbar = () => {

    const [color, setColor] = useState(false);
    // const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

    const handleScroll = () => {
        if (window.scrollY >= 20) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className=''>
            <header className={`header fixed w-[100%] pt-5   z-40 transaction-ease-in-out duration-300 ${color ? 'px-[70px] py-3 bg-white flex justify-between shadow-md' : 'flex justify-between px-[70px]'}`}>
                <div className="flex items-center">
                    {
                        color ? (
                            <div className="logo w-[150px]">
                                <img src={logo2} alt="" />
                            </div>

                        ) : (
                            <div className="logo w-[150px]">
                                <img src={logo} alt="" />
                            </div>
                        )
                    }

                </div>

                <div className="hidden md:flex items-center">
                    <button className="p-2 mr-4 text-gray-300 hover:text-white">
                    </button>

                    <nav className="flex items-center space-x-8 mr-6">
                        <a href="/" className={` ${color ? 'text-black' : 'text-white'} hover:text-[#4ade80]`}>
                            Home
                        </a>
                        <div className="relative group">
                            <button className={` ${color ? 'text-black' : 'text-white'} hover:text-[#4ade80]`}>
                                Services
                            </button>
                        </div>
                        <a href="/about" className={` ${color ? 'text-black' : 'text-white'} hover:text-[#4ade80]`}>
                            About Us
                        </a>
                        <a href="/contact" className={` ${color ? 'text-black' : 'text-white'} hover:text-[#4ade80]`}>
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <a
                            href="/signin"
                            className={` ${color ? 'text-black' : 'text-white'} hover:bg-gray-700 transition-colors px-6 py-2 border border-gray-600 rounded-full`}>
            
                        
                            Sign in
                        </a>
                        <a
                            href="/join"
                            className="px-6 py-2 bg-[#4ade80] rounded-full text-gray-800 font-medium hover:bg-[#3cce70] transition-colors"
                        >
                            Join
                        </a>
                    </div>
                </div>




            </header>
        </div>
    )
}

export default Navbar
