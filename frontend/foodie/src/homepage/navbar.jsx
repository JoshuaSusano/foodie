import logo from '../assets/foodie_logo.png';
import React, { useState, useEffect } from 'react';
const navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolling(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between p-3 transition-all duration-500 ${
          scrolling ? 'bg-white text-black shadow-md' : 'bg-transparent text-black'
        }`}
      >
        <div className="flex items-center space-x-4 mx-[70px]">
        <img 
           src={logo}
           alt="Logo"
           className="w-7 h-7 bg-white border border-black-300 rounded-full" 
        />
          <span className="text-xl font-bold">Foodie</span>
        </div>
  
        <ul className="hidden md:flex items-center justify-end flex-1 space-x-20 mx-[70px]">
          <li className="cursor-pointer font-bold hover:text-gray-500 transition-all">Home</li>
          <li className="cursor-pointer font-bold hover:text-gray-500 transition-all">Ingridients</li>
          <li className="cursor-pointer font-bold hover:text-gray-500 transition-all">Profile</li>     
        </ul>
        <div className="flex items-center mx-[70px]">
         <button className="px-4 py-2 bg-black text-white rounded-full font-bold text-sm">Logout</button>
         </div>
        <button
          className={`md:hidden focus:outline-none z-50 ${scrolling ? 'text-black' : 'text-black'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
  
        <div
          className={`fixed top-0 left-0 h-screen w-full bg-white text-black flex flex-col items-center justify-center gap-6 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-500 ease-in-out md:hidden`}
        >
          <div className="text-xl font-medium hover:text-gray-500 transition-all">Link</div>
          <div className="text-xl font-medium hover:text-gray-500 transition-all">Link</div>
          <div className="text-xl font-medium hover:text-gray-500 transition-all">Link</div>
          <div className="text-xl font-medium hover:text-gray-500 transition-all">Link</div>
        </div>
  
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsOpen(false)}
            style={{ zIndex: 30 }}
          />
        )}
      </nav>
    );
  };


export default navbar