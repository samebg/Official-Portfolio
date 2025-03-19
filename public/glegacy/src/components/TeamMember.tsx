import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gold mb-2">{name}</h3>
      <p className="text-gray-400 font-medium mb-3">{role}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default TeamMember;