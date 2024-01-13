"use client";

import { auth } from "@/config/firebase";
import { useAuth } from "@/context/adminAuth";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

type EditUserModalProps = {
  isVisible: boolean;
  handleModalCloseButtonClick: () => void;
  userId: string;
  name: string | null;
  nic: string | null;
  phone: string | null;
};

const EditUserModal = ({
  isVisible,
  handleModalCloseButtonClick,
  userId,
  name,
  nic,
  phone,
}: EditUserModalProps) => {
  const [userName, setUserName] = useState(name);
  const [userNIC, setUserNIC] = useState(nic);
  const [userPhone, setUserPhone] = useState(phone);
  const { fetchData } = useAuth();

  if (!isVisible) return null;

  const handleEditButtonClick = async () => {
    try {
      const API_URL = "http://localhost:8080";
      const token = await auth.currentUser?.getIdToken(true);

      const body = JSON.stringify({
        userId,
        userNIC,
        userName,
        userPhone,
      });
      const updatedPublicUserResponse = await fetch(
        `${API_URL}/api/user/publicUsers`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: body,
        },
      );
      if (updatedPublicUserResponse.ok) {
        await fetchData(auth.currentUser);
        alert("User Updated.");
        handleModalCloseButtonClick();
      } else {
        throw new Error("User not edited.");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div
          id="EditUserModalTitle"
          className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3"
        >
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Edit User
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
            <label>User Id:&nbsp;</label>
            <input
              type="text"
              value={userId}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              readOnly
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>User Name:&nbsp;</label>
            <input
              type="text"
              placeholder="Enter User Name"
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>User NIC:&nbsp;</label>
            <input
              type="text"
              placeholder="Enter National Identity Card No."
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setUserNIC(e.target.value)}
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>User Phone:&nbsp;</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
        </div>
        <div
          id="EditUserModalFooter"
          className="mx-1 my-1 flex items-center justify-center md:mx-3 lg:mx-5"
        >
          <button
            className="rounded-lg border-2 border-green-700 bg-green-700 p-2 text-white hover:border-green-700 hover:bg-white hover:text-green-700"
            onClick={handleEditButtonClick}
          >
            Edit User
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
