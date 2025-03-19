import React from 'react';
import { Crown, Sword, Mountain } from 'lucide-react';

const PricingCard = ({ title, price, features, icon: Icon }) => (
  <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gold/20 hover:border-gold/40 transition-all">
    <Icon className="w-12 h-12 text-gold mb-6 mx-auto" />
    <h3 className="text-2xl font-bold text-gold mb-4">{title}</h3>
    <p className="text-3xl font-bold text-white mb-6">${price}</p>
    <ul className="text-gray-300 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <span className="text-gold mr-2">•</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = () => {
  const tiers = [
    {
      title: "Cosmetic DLCs",
      price: "2.99",
      icon: Crown,
      features: [
        "Exclusive character skins",
        "Custom armor sets",
        "Unique UI themes",
        "Special effects",
        "Emotes and animations"
      ]
    },
    {
      title: "Gameplay Add-ons",
      price: "9.99",
      icon: Sword,
      features: [
        "New weapon types",
        "Additional side quests",
        "Mini dungeons",
        "New character classes",
        "Exclusive items"
      ]
    },
    {
      title: "Major Expansions",
      price: "19.99",
      icon: Mountain,
      features: [
        "Vast new areas",
        "Epic storylines",
        "Challenging boss fights",
        "New game mechanics",
        "Exclusive endgame content"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gold mb-4">Expand Your Adventure</h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Start your journey for free and enhance your experience with our carefully crafted downloadable content
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <PricingCard key={tier.title} {...tier} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gray-900 p-8 rounded-lg inline-block">
            <h3 className="text-2xl font-bold text-gold mb-4">Market Potential</h3>
            <ul className="text-gray-300 text-left space-y-3">
              <li>• Global RPG Market: $54.2 billion (2024)</li>
              <li>• Growth Rate: 9.1% annually</li>
              <li>• Target Audience: 1.5 billion RPG gamers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;