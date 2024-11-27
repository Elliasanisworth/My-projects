import React from 'react';
import FeatureList from '../components/FeaturesPage/FeatureList';
import Navbar from '../components/HomePage/Navbar';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-indigo-400">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Explore Features
        </h1>
        <FeatureList />
      </div>
    </div>
  );
};

export default FeaturesPage;
