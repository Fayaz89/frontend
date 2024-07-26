import React, { useState } from 'react';
import image from '../src/images/bank.webp';
import Side from './Side';

const Home = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  return (
    <>
      <div className="flex min-h-screen">
        <Side isVisible={isSideVisible} />
        <main className={`flex-1 transition-all duration-300 `}>
          <img src={image} alt="Analytics" className="w-full h-auto" />
        </main>
      </div>
    </>
  );
}

export default Home;
