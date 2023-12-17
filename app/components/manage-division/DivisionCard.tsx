import React, { useState } from "react";
import EditInstitutionModal from "./EditDevisionModal";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";


type props = {
  divisionId: number;
  divisionName: string | null;
  divisionType: string | null;
  divisionDescription: string | null;

};

const DivisionCard = ({
  divisionId,
  divisionName,
  divisionType,
  divisionDescription
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
        <div className="w-30 flex items-center justify-center">{divisionId}</div>
        <div className="flex items-center justify-center space-x-10">
            {divisionName}
        </div>
        <div className="w-30 flex items-center justify-center">
            {divisionType}
          </div>
        <div className="w-30 flex items-center justify-center">
          {divisionDescription}
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
        <EditInstitutionModal
          isVisible={modalVisible}
          divisionId={divisionId}
          divisionName={divisionName}
          divisionDescription={divisionDescription}
          divisionType={divisionType}
          handleModalCloseButtonClick={handleModalCloseButtonClick}
        />
      </div>
      
    </>
  );
};

export default DivisionCard;
