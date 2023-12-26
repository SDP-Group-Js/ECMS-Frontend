"use client";

import React, { useState } from "react";
import EditInstitutionModal from "./EditInstitutionModal";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";

type props = {
  institutionId: string;
  institutionName: string | null;
  institutionType: string | null;
  institutionDescription: string | null;
};

const InstitutionCard = ({
  institutionId,
  institutionName,
  institutionType,
  institutionDescription,
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
      <div className="my-2 flex items-center justify-start rounded-xl border-2 border-gray-400 px-4 py-[0.75rem]">
        <div className="mr-5 w-[15rem]">{institutionId}</div>
        <div className="mx-5 w-[25rem]">{institutionName}</div>
        <div className="mx-5 w-[30rem]">{institutionDescription}</div>
        <div>
          <button
            onClick={handleEditButtonClick}
            className="flex w-20 items-center justify-center space-x-5 rounded-lg border-2 border-blue-700 bg-blue-700 px-2 py-1 font-bold text-white hover:border-gray-500 hover:bg-white hover:text-gray-500"
          >
            Edit <MdOutlineOpenInNew className="h-8 w-8" />
          </button>
        </div>
        <EditInstitutionModal
          isVisible={modalVisible}
          institutionId={institutionId}
          institutionName={institutionName ? institutionName : ""}
          institutionDescription={
            institutionDescription ? institutionDescription : ""
          }
          handleModalCloseButtonClick={handleModalCloseButtonClick}
        />
      </div>
    </>
  );
};

export default InstitutionCard;
