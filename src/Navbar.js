import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSide }) => {
  // Check if token is present in localStorage
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token; // !!token converts token to a boolean
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');

    // Redirect to Signin page
    navigate('/Signin');
    console.log("Logout successful");
  };

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-white font-bold text-2xl cursor-pointer" onClick={toggleSide}>+</span>
        </div>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <span className="text-white hover:text-gray-300 px-5 text-lg">{/* Show user's name here */}</span>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-300 px-5 text-lg cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/Signin" className="text-white hover:text-gray-300 px-5 text-lg">Login</Link>
              <Link to="/SignUp" className="text-white hover:text-gray-300 px-5 text-lg">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
