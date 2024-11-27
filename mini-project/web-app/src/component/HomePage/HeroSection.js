import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">Welcome to MyApp</h1>
      <p className="text-lg max-w-md mb-8 mx-auto">
        Explore fun games, productivity tools, and creative features in one place!
      </p>
      <Link to="/features">
        <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
