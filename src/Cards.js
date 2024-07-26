import React, { useState, useEffect } from 'react';
import Side from './Side';
import { useUser } from './Context/context';

const Cards = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card
  const { userId } = useUser();

  useEffect(() => {
    const id = userId;

    if (id) {
      const fetchCard = async () => {
        try {
          const response = await fetch(`http://34.170.186.220:8081/cards/user/${id}`);
          if (response.ok) {
            const data = await response.json();
            console.log('Card data:', data.responseObj);
            setCardsData(data.responseObj); // Set the entire responseObj array
          } else {
            console.error('Failed to fetch card data');
          }
        } catch (error) {
          console.error('Error fetching card data:', error);
        }
      };

      fetchCard();
    }
  }, [userId]);

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  const handleSelectChange = (event) => {
    const selectedCardHolderName = event.target.value;
    const card = cardsData.find(card => card.cardHolderName === selectedCardHolderName);
    setSelectedCard(card);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Side isVisible={isSideVisible} toggleSide={toggleSide} />
      <main className={`flex-1 p-6 transition-all duration-300 ${isSideVisible ? 'ml-56' : 'ml-0'}`}>
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Cards</h1>
        </header>
        <div className="p-4 mb-6 bg-white rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">Family Members</h2>
          <select className="p-2 border rounded w-full" onChange={handleSelectChange}>
            <option value="">Select a cardholder</option>
            {cardsData.map((card) => (
              <option key={card.id} value={card.cardHolderName}>{card.cardHolderName}</option>
            ))}
          </select>
        </div>
        {selectedCard && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div key={selectedCard.id} className="w-full rounded-lg bg-red-700 p-6 shadow-xl text-white">
              <div className="flex justify-between items-center mb-6">
                <div className="text-xl font-bold">{selectedCard.bankName}</div>
                <img src={selectedCard.logoUrl} alt="Bank Logo" className="w-12" />
              </div>
              <div className="mb-6">
                <div className="text-lg"></div>
                <div className="text-2xl font-semibold tracking-widest">{selectedCard.cardNumber}</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg"></div>
                  <div className="text-xl font-semibold">{selectedCard.cardHolderName}</div>
                </div>
                <div>
                  <div className="text-lg"></div>
                  <div className="text-xl font-semibold">{selectedCard.expiryDate}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cards;
