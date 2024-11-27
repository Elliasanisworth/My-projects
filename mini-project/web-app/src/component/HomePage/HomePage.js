import React from 'react';
import Navbar from './navbar';
import HeroSection from './HeroSection';
// import CTASection from './CTASection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 ">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Get Ready Section */}
      <div className="from-green-400 to-blue-500 py-10 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
        <p className="text-white mt-2">
          Start exploring all the amazing features we have for you!
        </p>
        <button className="mt-4 text-cyan-500 bg-white px-6 py-3 rounded-md font-bold hover:shadow-lg transition-all">
          See Our Features
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};




export default HomePage;
