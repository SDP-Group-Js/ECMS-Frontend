import React from "react";
import { IoCloseSharp } from "react-icons/io5";

type EditDivisionModalProps = {
  isVisible: boolean;
  divisionId: number;
  divisionName: string | null;
  divisionDescription: string | null;
  divisionType: string | null;
  handleModalCloseButtonClick: () => void;
};

const EditDivisionModal = ({
  isVisible,
  handleModalCloseButtonClick,
  divisionId,
  divisionName,
  divisionDescription,
  divisionType,
}: EditDivisionModalProps) => {
  if (!isVisible) return null;

  const handleEditButtonClick = () => {
    console.log("Division Edited");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div
          id="EditInstitutitonModalTitle"
          className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3"
        >
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Edit Division
          </h2>
          <button
            className="place-self-end rounded-lg p-2 text-2xl text-black hover:bg-red-500 hover:text-white"
            onClick={handleModalCloseButtonClick}
          >
            <IoCloseSharp />
          </button>
        </div>
        <div
          id="EditInstitutionModalContent"
          className="my-2 w-full flex-col justify-center text-xl"
        >
          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Division Id:&nbsp;</label>
            <input
              type="text"
              value={divisionId}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              readOnly
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Division Name:&nbsp;</label>
            <input
              type="text"
              value={divisionName ?? ''}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Division Type:</label>
            <select className="ml-2 flex-grow rounded-lg border-2 p-2">
              {divisionType === null ? (
                ""
              ) : (
                <option value={divisionType} selected>
                  [Selected Type]
                </option>
              )}
              <option value="[Id of the division]">[Type]</option>
              <option value="[Id of the division]">[Type]</option>
              <option value="[Id of the division]">[Type]</option>
            </select>
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Division Description:&nbsp;</label>
            <input
              type="text"
              value={divisionDescription ?? ''}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
            />
          </div>
        </div>
        <div
          id="EditDivisionModalFooter"
          className="mx-1 my-1 flex items-center justify-center md:mx-3 lg:mx-5"
        >
          <button
            className="rounded-lg border-2 border-green-700 bg-green-700 p-2 text-white hover:border-green-700 hover:bg-white hover:text-green-700"
            onClick={handleEditButtonClick}
          >
            Edit Division
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDivisionModal;
