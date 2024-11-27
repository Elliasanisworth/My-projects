import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-teal-400">
          MyApp
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-teal-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-teal-400 transition">
              Features
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
