import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';
import Side from './Side';
import axios from 'axios';
import { useUser } from './Context/context';

Modal.setAppElement('#root');

const FamilyManagement = () => {
  const [isSideVisible, setIsSideVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([]);
  const [familyMember, setFamilyMember] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingMemberId, setEditingMemberId] = useState(null);

  const { userId } = useUser(); // Get userId from context

  useEffect(() => {
    fetchFamilyMembers();
  }, []);

  const fetchFamilyMembers = async () => {
    try {
      const response = await fetch(`http://34.170.186.220:8081/users/getByUserId/${userId}`);
      if (response.ok) {
        const data = await response.json();
        console.log('User data:', data.responseObj);
        setFamilyMembers(data.responseObj);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const toggleSide = () => {
    setIsSideVisible(!isSideVisible);
  };

  const openModal = (member = null) => {
    if (member) {
      setFamilyMember(member);
      setIsEditing(true);
      setEditingMemberId(member.id);
    } else {
      setFamilyMember({ name: '', email: '', password: '' });
      setIsEditing(false);
      setEditingMemberId(null);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFamilyMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert('User ID is missing. Please try again.');
      return;
    }

    try {
      if (isEditing) {
        await axios.put(`http://34.170.186.220:8081/users/updateFamilyMember/${editingMemberId}`, familyMember);
        alert('Family member updated successfully!');
      } else {
        await axios.post(`http://34.170.186.220:8081/users/addFamilyMember/${userId}`, familyMember);
        alert('Family member added successfully!');
      }
      closeModal();
      fetchFamilyMembers();
    } catch (error) {
      console.error('Error saving family member:', error);
      alert('Failed to save family member. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://34.170.186.220:8081/users/deleteFamilyMember/${id}`);
      alert('Family member deleted successfully!');
      fetchFamilyMembers();
    } catch (error) {
      console.error('Error deleting family member:', error);
      alert('Failed to delete family member. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Side isVisible={isSideVisible} />
        <main className={`flex-1 p-6 transition-all duration-300 ${isSideVisible ? 'ml-56' : 'ml-0'}`}>
          <header className="text-2xl font-bold mb-6">Family Management</header>
          <div className="mb-4 flex justify-between items-center">
            <div className="text-xl font-semibold">Family</div>
            <button onClick={() => openModal()} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add Family
            </button>
          </div>
          <main className="rounded">
            <div className="w-full">
              <div>
                {
                  <ul className="flex flex-col bg-gray-200">
                    {familyMembers.map((member) => (
                      <li key={member.id} className="flex justify-between items-center px-20 py-4">
                        <span>{member.name}</span>
                        <span>{member.email}</span>
                        <button onClick={() => openModal(member)} className="text-blue-500 p-4 hover:text-blue-700">
                          <FaEdit />
                        </button>
                        <button onClick={() => handleDelete(member.id)} className="text-red-500 p-4 hover:text-red-700">
                          <FaTrash />
                        </button>
                      </li>
                    ))}
                  </ul>
                 }
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
            <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Family Member' : 'Add Family Member'}</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={familyMember.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={familyMember.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={familyMember.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Enter password"
                />
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
