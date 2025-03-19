import React from 'react';
import { Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/Genie Legacy.png" alt="Génie Legacy" className="h-8 w-8" />
            <span className="ml-2 text-gold font-semibold">Génie Legacy</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gold">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold">
              <Instagram size={20} />
            </a>
            <a href="mailto:contact@genielagacy.com" className="text-gray-400 hover:text-gold">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © 2024 Génie Legacy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;