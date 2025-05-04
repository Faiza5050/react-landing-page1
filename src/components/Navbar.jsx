import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-100">
      
      <div className="text-2xl flex font-bold text-gray-900">
        <img src='./logo1.png' alt="Logo" className='h-8' />
      </div>
      
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="uppercase tracking-wider text-sm font-medium text-white hover:text-blue-600 transition-colors">HOME</Link>
        <Link to="/about" className="uppercase tracking-wider text-sm font-medium text-white hover:text-blue-600 transition-colors">ABOUT</Link>
        <Link to="/work" className="uppercase tracking-wider text-sm font-medium text-white hover:text-blue-600 transition-colors">WORK</Link>
        <Link to="/services" className="uppercase tracking-wider text-sm font-medium text-white hover:text-blue-600 transition-colors">SERVICES</Link>
        <Link to="/testimonials" className="uppercase tracking-wider text-sm font-medium text-white hover:text-blue-600 transition-colors">TESTIMONIALS</Link>
        <Link to="/blog" className="uppercase tracking-wider text-sm font-medium text-white hover:text-blue-600 transition-colors">BLOG</Link>
        <Link to="/contact" className="uppercase tracking-wider text-sm font-medium text-white hover:text-blue-600 transition-colors">CONTACT</Link>
      </div>
      
      <button className="bg-black text-black text-2xl px-6 py-4 rounded-md text-sm font-bold hover:bg-green-800 bg-yellow-400 transition-colors">
        Let's Talk →
      </button>
    </nav>
  );
};

export default Navbar;
