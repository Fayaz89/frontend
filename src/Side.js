import React from 'react';
import { FaBell, FaEnvelope, FaChartBar } from 'react-icons/fa';

const Side = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <div
      className={`fixed top-0 left-0 bg-gray-800 text-white w-3/12 my-32 min-h-screen shadow-lg transform transition-transform duration-300 ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
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
      </ul>
    </div>
  );
};

export default Side;
