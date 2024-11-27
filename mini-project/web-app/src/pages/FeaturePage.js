import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  { name: 'Tic Tac Toe', path: '/tic-tac-toe' },
  { name: 'To-Do List', path: '/todo' },
  { name: '2D Paint', path: '/paint' },
  { name: 'Location Tracker', path: '/location' },
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white">
      <header className="py-6 text-center">
        <Link to="/" className="text-3xl font-bold text-teal-400 hover:underline">
          Home
        </Link>
      </header>
      <main className="flex flex-col items-center px-4">
        <h1 className="text-4xl font-bold mb-8">Our Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className="p-6 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-md transition"
            >
              <h2 className="text-2xl font-semibold text-teal-400">{feature.name}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FeaturesPage;
