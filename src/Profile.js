// src/ProfileManagement.js
import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Alex Anderson',
    email: 'alex.anderson@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA'
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const updateProfile = () => {
    // Logic to update the profile
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 ">
      <div className="bg-white shadow-md rounded p-6 w-full w-1/2">
        <h2 className="text-2xl mb-4 text-center">Profile Management</h2>
        
        <div className="mb-4">
          <h3 className="text-xl mb-2">User Profile Details</h3>
          <div className="space-y-2">
            <div>
              <label className="block text-gray-700">Name</label>
              <input 
                type="text" 
                name="name" 
                value={profile.name} 
                onChange={handleProfileChange} 
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                name="email" 
                value={profile.email} 
                onChange={handleProfileChange} 
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input 
                type="text" 
                name="phone" 
                value={profile.phone} 
                onChange={handleProfileChange} 
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input 
                type="text" 
                name="address" 
                value={profile.address} 
                onChange={handleProfileChange} 
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <button onClick={updateProfile} className="px-4 py-2 bg-blue-500 text-white rounded">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
