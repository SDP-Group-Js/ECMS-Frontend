import React from "react";
import { IoCloseSharp } from "react-icons/io5";

type AddUserModalProps = {
  isVisible: boolean;
  textToDisplay: string;
  onClick: () => void;
  handleModalCloseButtonClick: () => void;
};

const AddUserModal = ({
  onClick,
  isVisible,
  handleModalCloseButtonClick,
}: AddUserModalProps) => {
  if (!isVisible) return null;

  const handleAddButtonClick = () => {
    console.log("User Added");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div
          id="EditUserModalTitle"
          className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3"
        >
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Add User
          </h2>
          <button
            className="place-self-end rounded-lg p-2 text-2xl text-black hover:bg-red-500 hover:text-white"
            onClick={handleModalCloseButtonClick}
          >
            <IoCloseSharp />
          </button>
        </div>
        <div
          id="EditUserModalContent"
          className="my-2 w-full flex-col justify-center text-xl"
        >
          <div className="mx-4 my-4 flex items-center justify-center">
            <label>User Name:&nbsp;</label>
            <input
              type="text"
              placeholder="Enter User Name"
              className="ml-2 flex-grow rounded-lg border-2 p-2"
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>User Role</label>
            <select className="ml-2 flex-grow rounded-lg border-2 p-2">
              <option value="" selected>
                [Selected Type]
              </option>
              <option value="">System Admin</option>
              <option value="">Office Admin</option>
              <option value="">Complaint Handler</option>
              <option value="">Field Officer</option>
              <option value="">Investigation Handler</option>
              <option value="">Viewer</option>
            </select>
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Office</label>
            <select className="ml-2 flex-grow rounded-lg border-2 p-2">
              <option value="" selected>
                [Selected Type]
              </option>
              <option value="">[Type]</option>
              <option value="">[Type]</option>
              <option value="">[Type]</option>
            </select>
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Password:&nbsp;</label>
            <input
              type="text"
              placeholder="Enter user's Password"
              className="ml-2 flex-grow rounded-lg border-2 p-2"
            />
          </div>
        </div>
        <div
          id="AddUserModalFooter"
          className="mx-1 my-1 flex items-center justify-center md:mx-3 lg:mx-5"
        >
          <button
            className="rounded-lg border-2 border-green-700 bg-green-700 p-2 text-white hover:border-green-700 hover:bg-white hover:text-green-700"
            onClick={handleAddButtonClick}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddUserModal;
