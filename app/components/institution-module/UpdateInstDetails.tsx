// components/InstitutionUpdateModal.js
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Modal from 'react-modal';

interface Institution {
  name: string;
  location: string;
  // Add other properties as needed
}

interface InstitutionUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (updatedDetails: Institution) => void;
  currentDetails: Institution;
}

Modal.setAppElement('#__next'); // Set the app root element

const InstitutionUpdateModal: React.FC<InstitutionUpdateModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  currentDetails,
}) => {
  const [updatedDetails, setUpdatedDetails] = useState<Institution>(currentDetails);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call the onSubmit function with the updated details
    onSubmit(updatedDetails);
    onClose(); // Close the modal
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <div className="modal-content">
        <h2 className="text-2xl font-bold mb-4">Update Institution Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={updatedDetails.name || ''}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Location:</label>
            <input
              type="text"
              name="location"
              value={updatedDetails.location || ''}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          {/* Add more form fields as needed */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Update Details
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default InstitutionUpdateModal;
