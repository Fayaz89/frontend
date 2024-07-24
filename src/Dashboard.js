import React, { useState } from 'react';
import Side from './Side';

const Dashboard = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Side isVisible={isSideVisible} />
      <main className={`flex-1 p-6 transition-all duration-300 ${isSideVisible ? 'ml-56' : 'ml-0'}`}>
        <header className="text-2xl font-bold mb-6">Dashboard</header>
        {/* Dashboard content goes here */}
      </main>
    </div>
  );
};

export default Dashboard;
