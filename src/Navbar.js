import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-white font-bold text-2xl">Urban Bank</span>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300 px-5 text-lg">Login</Link>
          <Link to="/SignUp" className="text-white hover:text-gray-300 px-5 text-lg">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
