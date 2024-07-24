import React, { useState } from 'react';
import Side from './Side';

const Limits = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  return (
    <div className="min-h-screen flex">
      <Side isVisible={isSideVisible} />
      <main className={`flex-1 p-6 transition-all duration-300 ${isSideVisible ? 'ml-56' : 'ml-0'}`}>
        <div className="bg-white shadow-md rounded-lg p-6 mb-10 flex">
          <div className="w-1/2 pr-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <select
                id="name"
                className="block w-full bg-white border border-gray-300 rounded-lg py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>John Doe</option>
                <option>Jane Doe</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card">
                Card
              </label>
              <select
                id="card"
                className="block w-full bg-white border border-gray-300 rounded-lg py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>1234 5678 9012 3456</option>
                <option>9876 5432 1098 7654</option>
              </select>
            </div>
          </div>
          <div className="w-1/2 pl-4 flex flex-col justify-between">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
              View Limit
            </button>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Modify Limit
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-sm w-full rounded-lg bg-blue-600 p-6 shadow-xl text-white">
            <div className="flex justify-between items-center mb-6">
              <div className="text-xl font-bold">Bank Name</div>
              <img src="https://via.placeholder.com/50" alt="Bank Logo" className="w-12" />
            </div>
            <div className="mb-6">
              <div className="text-lg">Card Number</div>
              <div className="text-2xl font-semibold tracking-widest">1234 5678 9012 3456</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg">Card Holder</div>
                <div className="text-xl font-semibold">John Doe</div>
              </div>
              <div>
                <div className="text-lg">Expiry</div>
                <div className="text-xl font-semibold">12/24</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Limits;
