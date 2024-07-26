import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Side from './Side';
import { useUser } from './Context/context';

const Dashboard = () => {
  const location = useLocation();
  const { userId } = useUser(); // Retrieve userId from context
  const [isSideVisible, setIsSideVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const [card, setCard] = useState(null);

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  useEffect(() => {
    const id = userId || (location.state && location.state.userId);

    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://34.170.186.220:8081/users/getByUserId/${id}`);
          if (response.ok) {
            const data = await response.json();
            console.log('User data:', data);
            setUserData(data.responseObj);
          } else {
            console.error('Failed to fetch user data');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      const fetchCard = async () => {
        try {
          const response = await fetch(`http://34.170.186.220:8081/cards/user/${id}`);
          if (response.ok) {
            const data = await response.json();
            console.log('Card data:', data);
            setCard(data.responseObj);
          } else {
            console.error('Failed to fetch card data');
          }
        } catch (error) {
          console.error('Error fetching card data:', error);
        }
      };

      fetchData();
      fetchCard();
    }
  }, [userId, location.state]);

  return (
    <div className="flex min-h-screen">
      <Side isVisible={isSideVisible} />
      <main className={`flex-1 p-6 transition-all duration-300 ${isSideVisible ? 'ml-56' : 'ml-0'}`}>
        <header className="text-2xl font-bold mb-6">Family Details</header>

        {userData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userData.map((user) => (
              <div key={user.id} className="bg-white shadow-md rounded-lg p-4 w-full">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                {/* Add more fields as needed */}
              </div>
            ))}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
        
        <header className="text-2xl font-bold mb-6 mt-8">Card Details</header>

        {card ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {card.map((cardItem) => (
              <div key={cardItem.id} className="bg-white shadow-md rounded-lg p-4 w-full">
                <p><strong>Card Number:</strong> {cardItem.cardNumber}</p>
                <p><strong>Expiry Date:</strong> {cardItem.expiryDate}</p>
                {/* Add more fields as needed */}
              </div>
            ))}
          </div>
        ) : (
          <p>Loading card data...</p>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
