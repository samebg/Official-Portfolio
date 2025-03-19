import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black/90 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/Genie Legacy.png" alt="Génie Legacy" className="h-10 w-10" />
            <span className="ml-2 text-gold font-semibold text-xl">Génie Legacy</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-gold px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <a href="#value" className="text-gray-300 hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Value</a>
              <a href="#pricing" className="text-gray-300 hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-gold">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;