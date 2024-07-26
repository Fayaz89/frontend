import React, { useState } from 'react';
import image from '../src/images/Analytics.jpg';
import Side from './Side';

const Analytics = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  return (
    <>
      <div className="flex min-h-screen">
        <Side isVisible={isSideVisible} />
        <main className={`flex-1 p-6 transition-all duration-300 ${isSideVisible ? 'ml-56' : 'ml-0'}`}>
          <img src={image} alt="Analytics" className="w-full h-auto" />
        </main>
      </div>
    </>
  );
}

export default Analytics;
