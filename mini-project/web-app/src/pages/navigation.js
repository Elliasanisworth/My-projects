import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex justify-center space-x-4 p-4 bg-gray-200">
      <Link to="/" className="text-blue-500">Home</Link>
      <Link to="/chess" className="text-blue-500">Chess Game</Link>
    </nav>
  );
}

export default Navigation;
