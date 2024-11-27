import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  { name: 'Tic Tac Toe', link: '/tic-tac-toe', color: 'bg-blue-600' },
  { name: 'To Do List', link: '/to-do', color: 'bg-green-600' },
  { name: '2D Paint', link: '/paint', color: 'bg-yellow-600' },
  { name: 'Location Tracker', link: '/location', color: 'bg-red-600' },
];

const FeatureList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Link to={feature.link} key={index}>
          <div
            className={`p-6 text-white font-bold text-center rounded-lg shadow-lg hover:scale-105 transition-transform ${feature.color}`}
          >
            {feature.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeatureList;
