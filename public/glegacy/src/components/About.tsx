import React from 'react';
import TeamMember from './TeamMember';

const About = () => {
  const team = [
    {
      name: "Sam Ebengho",
      role: "Business Specialist",
      description: "Sam is responsible for overseeing the project's success, managing business operations, and ensuring the overall strategic direction of the game."
    },
    {
      name: "Andrei Novozhilov",
      role: "Marketing Specialist",
      description: "Andrei focuses on promoting the game, engaging with the community, and ensuring that the game reaches a wide audience through targeted marketing strategies."
    },
    {
      name: "Newton Hoang",
      role: "Software Engineer",
      description: "Newton leads the game development process, ensuring that the game is built efficiently, runs smoothly, and provides a seamless player experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gold mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;