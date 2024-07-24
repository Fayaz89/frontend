import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ toggleSide }) => {
  return (
    <nav className="bg-green-700 text-white">
      <ul className="flex space-x-4 p-4 justify-around">
        <li className='hover:underline cursor-pointer' onClick={toggleSide}>
           + 
        </li>
        <li className="hover:underline">
          <Link to="/dashboard">Accounts</Link>
        </li>
        <li className="hover:underline">
          <Link to="/family">Family</Link>
        </li>
        <li className="hover:underline">
          <Link to="/cards">Cards</Link>
        </li>
        <li className="hover:underline">
          <Link to="/limits">Limits</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
