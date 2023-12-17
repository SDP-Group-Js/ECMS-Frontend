import React, { useState } from "react";
import EditOfficeModal from "./EditOfficeModal";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";


type props = {
  officeId: number;
  officeName: string | null;
  officeType: string | null;
  officeDescription: string | null;

};

const OfficeCard = ({
  officeId,
  officeName,
  officeType,
  officeDescription
}: props) => {
  const [modalVisible, setEditModalVisible] = useState(false);


  const handleModalCloseButtonClick = () => {
    setEditModalVisible(false);
  };
  const handleEditButtonClick = () => {
    setEditModalVisible(true);
  };

  return (
    <>
      <div className="my-2 flex items-center justify-between rounded-xl border-2 border-gray-400 px-4 py-[0.75rem]">
        <div className="w-30 flex items-center justify-center">{officeId}</div>
        <div className="flex items-center justify-center space-x-10">
            {officeName}
        </div>
        <div className="w-30 flex items-center justify-center">
            {officeType}
          </div>
        <div className="w-30 flex items-center justify-center">
          {officeDescription}
        </div>
        <div>        
          <button onClick={handleEditButtonClick} className="flex w-20 items-center justify-center space-x-5 rounded-lg border-2 border-blue-700 bg-blue-700 px-2 py-1 font-bold text-white hover:border-gray-500 hover:bg-white hover:text-gray-500">
            Edit <MdOutlineOpenInNew className='w-8 h-8'/>
          </button>
        </div>
        <div>        
          <button className="flex w-18 items-center justify-center space-x-5 rounded-lg border-2 border-red-600 bg-red-600 px-2 py-1 font-bold text-white hover:border-gray-500 hover:bg-white hover:text-gray-500">
            Delete <RiDeleteBin5Line className='w-8 h-8' />
          </button>
        </div>
        <EditOfficeModal
          isVisible={modalVisible}
          officeId={officeId}
          officeName={officeName}
          officeDescription={officeDescription}
          officeType={officeType}
          handleModalCloseButtonClick={handleModalCloseButtonClick}
        />
      </div>
      
    </>
  );
};

export default OfficeCard;
