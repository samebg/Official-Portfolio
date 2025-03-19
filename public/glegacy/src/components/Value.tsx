import React from 'react';
import { Shield, Gift, Gamepad2 } from 'lucide-react';

const Value = () => {
  return (
    <section id="value" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gold mb-12">Our Value Proposition</h2>
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Golden Legacy offers an immersive RPG experience with a unique loot and crafting system, engaging gameplay, and exciting DLC content. With a focus on monster skins and customizability, players can create their own personalized adventure while exploring new worlds.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gold mb-2">Quality Gaming</h3>
            <p className="text-gray-300">High-quality, free-to-play entertainment that doesn't compromise on experience</p>
          </div>
          <div className="text-center p-6">
            <Gamepad2 className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gold mb-2">Unique Systems</h3>
            <p className="text-gray-300">Innovative loot and crafting systems that enhance gameplay</p>
          </div>
          <div className="text-center p-6">
            <Gift className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gold mb-2">Affordable DLC</h3>
            <p className="text-gray-300">Expand your adventure with exciting DLC content at reasonable prices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;