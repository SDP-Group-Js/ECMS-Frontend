import React, { useState } from "react";
import Link from "next/link";
import AddUserModal from "./AddPublicUserModal";
import UserTable from "./PublicUserTable";
import { MdGroupAdd } from "react-icons/md";

type props = {
  users: any;
};

export default function ManInst({ users }: props) {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const handleModalCloseButtonClick = () => {
    setAddModalVisible(false);
  };

  const handleAddButtonClick = () => {
    setAddModalVisible(true);
  };

  return (
    <div>
      <br></br>
      <div className="mx-14 flex items-center justify-start text-xl font-bold">
        <h3>Public Users</h3>
      </div>
      <div className="mx-14 my-5 rounded-md border-2 border-gray-400 px-3 py-4">
        <div className="mt-2 text-lg">
          <div className="flex items-center justify-start space-x-3">
            <div className="w-60">
              <button
                onClick={handleAddButtonClick}
                className=" w-50 h-15 flex items-center justify-center rounded-lg border-2 border-gray-700 bg-gray-700 px-2 py-1 font-bold text-white hover:border-gray-500 hover:bg-white hover:text-gray-500"
              >
                <MdGroupAdd className="h-8 w-6" />
                Add Public User
              </button>
              <AddUserModal
                isVisible={addModalVisible}
                handleModalCloseButtonClick={handleModalCloseButtonClick}
                textToDisplay="Add Institute"
                onClick={handleAddButtonClick}
              />
            </div>
            <div className="flex w-full items-center justify-end">
              <label className="w-90">Number Of Public Users:&nbsp;</label>
              <span className="w-90"> {users.length} </span>
            </div>
          </div>
          <br></br>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}
