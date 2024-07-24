import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';
import Nav from './Nav';
import Side from './Side';

Modal.setAppElement('#root');

const FamilyManagement = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(() => {
    // Example: Fetching family members from an API endpoint
    fetch('https://api.example.com/family')
      .then(response => response.json())
      .then(data => setFamilyMembers(data))
      .catch(error => console.error('Error fetching family members:', error));
  }, []);

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav toggleSide={toggleSide} />
      <div className="flex">
        <Side isVisible={isSideVisible} />
        <main className={`flex-1 p-6 transition-all duration-300 ${isSideVisible ? 'ml-56' : 'ml-0'}`}>
          <header className="text-2xl font-bold mb-6">Family Management</header>
          <div className="mb-4 flex justify-between items-center">
            <div className="text-xl font-semibold">Family</div>
            <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add Family
            </button>
          </div>
          <main className="rounded">
            <div className="w-full">
              <div>
                <ul className="flex bg-gray-200">
                  <li className="px-20 py-4">Name</li>
                  <li className="px-20 py-4">Phone</li>
                  <li className="px-20 py-4">DOB</li>
                  <li className="px-20 py-4">Email</li>
                  <li className="px-20 py-4">Relation</li>
                  <li className="px-20 py-4">Password</li>
                  <li className="px-20 py-4">Actions</li> {/* New: Actions column */}
                </ul>
                {familyMembers.map(member => (
                  <ul key={member.id} className="flex">
                    <li className="px-20 py-4">{member.name}</li>
                    <li className="px-20 py-4">{member.phone}</li>
                    <li className="px-20 py-4">{member.dob}</li>
                    <li className="px-20 py-4">{member.email}</li>
                    <li className="px-20 py-4">{member.relation}</li>
                    <li className="px-20 py-4">{member.password}</li>
                    <li className="px-20 py-4">
                      <button className="text-blue-500 p-4 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 p-4 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </main>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Add Family Member"
            className="bg-white p-8 rounded shadow-lg w-1/2 mx-auto my-8"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <h2 className="text-2xl font-bold mb-4">Add Family Member</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Enter phone number" />
              </div>
              <div>
                <label className="block text-gray-700">DOB</label>
                <input type="date" className="w-full px-4 py-2 border rounded" />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded" placeholder="Enter email" />
              </div>
              <div>
                <label className="block text-gray-700">Relation</label>
                <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Enter relation" />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input type="password" className="w-full px-4 py-2 border rounded" placeholder="Enter password" />
              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" onClick={closeModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Save
                </button>
              </div>
            </form>
          </Modal>
        </main>
      </div>
    </div>
  );
};

export default FamilyManagement;
