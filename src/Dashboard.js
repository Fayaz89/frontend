import React, { useState } from 'react';
import Nav from './Nav';
import Side from './Side';

const Dashboard = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav toggleSide={toggleSide} />
      <div className="flex">
        <Side isVisible={isSideVisible} />
        <main className={`flex-1 p-6 transition-all duration-300 ${isSideVisible ? 'ml-56' : 'ml-0'}`}>
          <header className="text-2xl font-bold mb-6">Dashboard</header>
          {/* Dashboard content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
