"use client";

import { auth } from "@/config/firebase";
import { useAuth } from "@/context/adminAuth";
import React, { useState } from "react";
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
  const [userName, setUserName] = useState("");
  const [userNIC, setUserNIC] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { fetchData } = useAuth();

  if (!isVisible) return null;

  const handleAddButtonClick = async () => {
    try {
      const API_URL = "http://localhost:8080";

      const token = await auth.currentUser?.getIdToken(true);
      const nicResponse = await fetch(
        `${API_URL}/api/user/publicUsers/${userNIC}/exists`,
      );
      const data = await nicResponse.json();

      const userExists = data.publicUserWithNicExists;
      if (userExists)
        throw new Error("There already exists a user with this NIC.");

      const body = JSON.stringify({
        userEmail,
        userPassword,
        userNIC,
        userName,
        userPhone,
      });

      const newPublicUserResponse = await fetch(
        `${API_URL}/api/user/admin/createPublicUserByAdmin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: body,
        },
      );

      if (newPublicUserResponse.ok) {
        await fetchData(auth.currentUser);
        alert("Public User Added.");
        handleModalCloseButtonClick();
      } else {
        throw new Error("User not added.");
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
            Add Public User
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

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Email:&nbsp;</label>
            <input
              type="email"
              placeholder="Enter User's Email"
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Password:&nbsp;</label>
            <input
              type="text"
              placeholder="Enter User's Password"
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setUserPassword(e.target.value)}
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
