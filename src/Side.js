import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaEnvelope, FaChartBar } from 'react-icons/fa';

const Side = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <aside className={`w-3/12 bg-gray-800 min-h-screen text-white ${isVisible ? 'block' : 'hidden'}`}>
      <ul className="space-y-2 p-4">
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <FaBell className="mr-3" />
          <span>Alerts</span>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <FaEnvelope className="mr-3" />
          <span>Notifications</span>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <FaChartBar className="mr-3" />
          <span>Analytics</span>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/dashboard" className="flex items-center">
            <span>Accounts</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/family" className="flex items-center">
            <span>Family</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/cards" className="flex items-center">
            <span>Cards</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/limits" className="flex items-center">
            <span>Limits</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Side;
