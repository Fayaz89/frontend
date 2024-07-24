import React, { useState, useEffect } from 'react';
import Side from './Side';

const Cards = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/cards')
      .then(response => response.json())
      .then(data => setCardsData(data))
      .catch(error => console.error('Error fetching cards data:', error));
  }, []);

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Side isVisible={isSideVisible} />
      <main className={`flex-1 p-6 transition-all duration-300 ${isSideVisible ? 'ml-56' : 'ml-0'}`}>
        <header className="text-2xl font-bold mb-6">Cards</header>
        {cardsData.map(card => (
          <div key={card.id} className="flex justify-center">
            <div className="w-96 rounded-lg bg-red-700 p-6 shadow-xl text-white">
              <div className="flex justify-between items-center mb-6">
                <div className="text-xl font-bold">Bank Name</div>
                <img src={card.logoUrl} alt="Bank Logo" className="w-12" />
              </div>
              <div className="mb-6">
                <div className="text-lg">Card Number</div>
                <div className="text-2xl font-semibold tracking-widest">{card.cardNumber}</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg">Card Holder</div>
                  <div className="text-xl font-semibold">{card.cardHolder}</div>
                </div>
                <div>
                  <div className="text-lg">Expiry</div>
                  <div className="text-xl font-semibold">{card.expiry}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Cards;
