import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';
import Side from './Side';

if (typeof window !== 'undefined') {
  Modal.setAppElement('#root');
}

const FamilyManagement = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(() => {
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
    <div className="flex min-h-screen bg-gray-100">
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
                <li className="px-20 py-4">Actions</li>
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
      </main>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Add Family</h2>
        <form>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" />
          </div>
          <div>
            <label>DOB</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Relation</label>
            <input type="text" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <div>
            <button type="button" onClick={closeModal}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default FamilyManagement;
