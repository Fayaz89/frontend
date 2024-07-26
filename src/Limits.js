import React, { useState, useEffect } from 'react';
import Side from './Side';
import { useUser } from './Context/context';

const Cards = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardLimit, setCardLimit] = useState(null);
  const [newLimit, setNewLimit] = useState('');
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
            setCardsData(data.responseObj);

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
    console.log(card);
    setCardLimit(card.spendingLimit); // Reset the card limit when selecting a new card
  };

  const viewLimit = async () => {
    if (selectedCard) {
      try {
        const response = await fetch(`http://34.170.186.220:8081/cards/limit/${selectedCard.id}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Card limit:', data.responseObj.spendingLimit);
          setCardLimit(data.responseObj.spendingLimit);
        } else {
          console.error('Failed to fetch card limit');
        }
      } catch (error) {
        console.error('Error fetching card limit:', error);
      }
    }
  };

  const modifyLimit = async () => {
    if (selectedCard && newLimit) {
      try {
        const response = await fetch(`http://34.170.186.220:8081/cards/limit/${selectedCard.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ spendingLimit: newLimit }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Updated card limit:', data.responseObj.spendingLimit);
          setCardLimit(data.responseObj.spendingLimit);
          setNewLimit('');
        } else {
          console.error('Failed to update card limit');
        }
      } catch (error) {
        console.error('Error updating card limit:', error);
      }
    }
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
              <option key={card.id} value={card.cardHolderName}>
                {card.cardHolderName} - {card.cardNumber}
              </option>
            ))}
          </select>
        </div>
        {selectedCard && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={selectedCard.id} className="w-full rounded-lg bg-red-700 p-6 shadow-xl text-white custom-card-width">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl font-bold">{selectedCard.bankName}</div>
                  <img src={selectedCard.logoUrl} alt="Bank Logo" className="w-12" />
                </div>
                <div className="mb-6">
                  <div className="text-lg">Card Number</div>
                  <div className="text-2xl font-semibold tracking-widest">{selectedCard.cardNumber}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg">Card Holder</div>
                    <div className="text-xl font-semibold">{selectedCard.cardHolderName}</div>
                  </div>
                  <div>
                    <div className="text-lg">Expiry</div>
                    <div className="text-xl font-semibold">{selectedCard.expiry}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={viewLimit}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                View Limit
              </button>
              <button
                onClick={modifyLimit}
                className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
               Update Limit
              </button>
            </div>

            <div className="mt-6 bg-white p-4  flex rounded justify-around shadow-md">
              <div>
                <h3 className="text-lg font-bold mb-4">Card Limit</h3>
                <div className="text-lg">Limit: {selectedCard.spendingLimit}</div>
              </div>
              {/* Add more limit details if necessary */}
              <div>
                <h3 className="text-lg font-bold mb-4">status</h3>
                <div className="text-lg">Limit: {selectedCard.status}</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cards;
