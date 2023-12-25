import React, { useState } from "react";
import EditUserModal from "./EditUserModal";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";
import EditPublicUserModal from "./EditPublicUserModal";

type props = {
  userId: string;
  userName: string | null;
  userNIC: string | null;
  userPhone: string | null;
};

const UserCard = ({ userId, userName, userNIC, userPhone }: props) => {
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
        <div className="w-[25rem]">{userId}</div>
        <div className="w-[15rem]">{userName}</div>
        <div className="w-[10rem]">{userNIC}</div>
        <div className="w-[25rem]">{userPhone}</div>
        <div>
          <button
            onClick={handleEditButtonClick}
            className="flex w-20 items-center justify-center space-x-5 rounded-lg border-2 border-blue-700 bg-blue-700 px-2 py-1 font-bold text-white hover:border-gray-500 hover:bg-white hover:text-gray-500"
          >
            Edit <MdOutlineOpenInNew className="h-8 w-8" />
          </button>
        </div>
        <EditPublicUserModal
          isVisible={modalVisible}
          handleModalCloseButtonClick={handleModalCloseButtonClick}
          userId={userId}
          name={userName}
          nic={userNIC}
          phone={userPhone}
        />
      </div>
    </>
  );
};

export default UserCard;
