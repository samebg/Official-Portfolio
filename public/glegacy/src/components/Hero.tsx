import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
      <div className="relative z-20 text-center">
        <img src="/Genie Legacy.png" alt="Génie Legacy" className="mx-auto w-32 h-32 mb-8" />
        <h1 className="text-5xl md:text-7xl font-bold text-gold mb-4">Golden Legacy</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          A free-to-play epic RPG adventure by Génie Legacy
        </p>
        <div className="mt-8">
          <a href="#pricing" className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Play Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;