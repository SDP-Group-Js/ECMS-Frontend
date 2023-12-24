import React from "react";
import { IoCloseSharp } from "react-icons/io5";

type EditBranchModalProps = {
  isVisible: boolean;
  branchId: number;
  branchName: string | null;
  branchDescription: string | null;
  branchType: string | null;
  handleModalCloseButtonClick: () => void;
};

const EditBranchModal = ({
  isVisible,
  handleModalCloseButtonClick,
  branchId,
  branchName,
  branchDescription,
  branchType,
}: EditBranchModalProps) => {
  if (!isVisible) return null;

  const handleEditButtonClick = () => {
    console.log("Branch Edited");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div
          id="EditInstitutitonModalTitle"
          className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3"
        >
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Edit Branch
          </h2>
          <button
            className="place-self-end rounded-lg p-2 text-2xl text-black hover:bg-red-500 hover:text-white"
            onClick={handleModalCloseButtonClick}
          >
            <IoCloseSharp />
          </button>
        </div>
        <div
          id="EditBranchModalContent"
          className="my-2 w-full flex-col justify-center text-xl"
        >
          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Branch Id:&nbsp;</label>
            <input
              type="text"
              value={branchId}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              readOnly
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Branch Name:&nbsp;</label>
            <input
              type="text"
              //value={branchName ?? ""}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Branch Description:&nbsp;</label>
            <input
              type="text"
              //value={branchDescription ?? ""}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
            />
          </div>
        </div>
        <div
          id="EditBranchModalFooter"
          className="mx-1 my-1 flex items-center justify-center md:mx-3 lg:mx-5"
        >
          <button
            className="rounded-lg border-2 border-green-700 bg-green-700 p-2 text-white hover:border-green-700 hover:bg-white hover:text-green-700"
            onClick={handleEditButtonClick}
          >
            Edit Branch
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBranchModal;
