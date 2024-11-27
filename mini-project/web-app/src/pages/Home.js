import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Fun Web App!</h1>
      <p className="mb-4">Choose a game or tool to get started:</p>
      <div className="space-y-4">
        <Link to="/tic-tac-toe">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Tic Tac Toe
          </button>
        </Link>
        <Link to="/snake">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
            Snake Game
          </button>
        </Link>
        <Link to="/todo">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition duration-300">
            To-Do List
          </button>
        </Link>
        <Link to="/paint">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
            2D Paint Tool
          </button>
        </Link>
        <Link to="/location">
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
            Real-Time Location Tracker
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
