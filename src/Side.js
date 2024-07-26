import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaEnvelope, FaChartBar, FaUsers, FaCreditCard, FaMoneyCheck } from 'react-icons/fa';

const Side = ({ isVisible }) => {
  if (!isVisible) return null;
  return (

    <aside className={`w-3/12 bg-gray-800 min-h-screen text-white ${isVisible ? 'block' : 'hidden'}`}>
      <ul className="space-y-2 p-4">
      <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/dashboard" className="flex items-center">
            <FaMoneyCheck className="mr-3" />
            <span>Accounts</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/family" className="flex items-center">
            <FaUsers className="mr-3" />
            <span>Family</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/cards" className="flex items-center">
            <FaCreditCard className="mr-3" />
            <span>Cards</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/limits" className="flex items-center">
            <FaChartBar className="mr-3" />
            <span>Limits</span>
          </Link>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
        <Link to="/Alerts" className="flex items-center">
          <FaBell className="mr-3" />
          <span>Alerts</span>
          </Link>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
        <Link to="/Notifications" className="flex items-center">
          <FaEnvelope className="mr-3" />
          <span>Notifications</span>
          </Link>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
        <Link to="/Analytics" className="flex items-center">
          <FaChartBar className="mr-3" />
          <span>Analytics</span>
          </Link>
        </li>
        
      </ul>
    </aside>
  );
};

export default Side;
