import React, { useState } from "react";
import EditUserModal from "./EditUserModal";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineOpenInNew } from "react-icons/md";

type props = {
  userId: string;
  userName: string | null;
  userType: string | null;
  userOfficeId: string | null;
  userOfficeName: string | null;
};

const UserCard = ({
  userId,
  userName,
  userType,
  userOfficeId,
  userOfficeName,
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
        <div className="w-[25rem]">{userId}</div>
        <div className="w-[15rem]">{userName}</div>
        <div className="w-[10rem]">{userType}</div>
        <div className="w-[25rem]">{userOfficeName}</div>
        <div>
          <button
            onClick={handleEditButtonClick}
            className="flex w-20 items-center justify-center space-x-5 rounded-lg border-2 border-blue-700 bg-blue-700 px-2 py-1 font-bold text-white hover:border-gray-500 hover:bg-white hover:text-gray-500"
          >
            Edit <MdOutlineOpenInNew className="h-8 w-8" />
          </button>
        </div>
        <EditUserModal
          isVisible={modalVisible}
          userId={userId}
          userName={userName}
          userOfficeId={userOfficeId}
          userType={userType}
          handleModalCloseButtonClick={handleModalCloseButtonClick}
        />
      </div>
    </>
  );
};

export default UserCard;
