'use client'
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose,  } : ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div id="EditInfoModalTitle" className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3">
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Edit Insitution Information
          </h2>
          <button className="place-self-end text-xl text-black" onClick={onClose}>
            X
          </button>
        
        </div>
        <br></br>
        <div id="EditInfoModalBody" className="mx-1 md:mx-3 lg:mx-5">
          Info
        </div>
        <br></br>
        <div id="EditInfoModalBody" className="mx-1 md:mx-3 lg:mx-5">
          Info
        </div>
        <br></br>
        <div id="EditInfoModalBody" className="mx-1 md:mx-3 lg:mx-5">
          Info
        </div>
        <br></br>
        <div id="EditInfoModalBody" className="mx-1 md:mx-3 lg:mx-5">
          Info
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
