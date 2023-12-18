'use client'
import React, { useState } from 'react';
import InstModal from './InstModal';

interface ButtonProps {
  label: string;
}

const EditDetailsBtn: React.FC<ButtonProps> = ({ label }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('Open modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Close modal');
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="bg-stone-500 hover:bg-neutral-700 text-white font-bold gap-3 py-3 px-5 rounded"
        onClick={openModal}
      >
        {label}
      </button>
      
        {isModalOpen && (<InstModal isOpen={isModalOpen} onClose={closeModal}/>)}
      
    </div>
  );
};

export default EditDetailsBtn;
