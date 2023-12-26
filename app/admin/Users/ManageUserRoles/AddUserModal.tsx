"use client";

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "@/context/adminAuth";
import { useState } from "react";
import { auth } from "@/config/firebase";

type AddUserModalProps = {
  isVisible: boolean;
  textToDisplay: string;
  onClick: () => void;
  handleModalCloseButtonClick: () => void;
};

enum UserRole {
  SystemAdmin = "SystemAdmin",
  OfficeAdmin = "OfficeAdmin",
  ComplaintHandler = "ComplaintHandler",
  InvestigationHandler = "InvestigationHandler",
  Viewer = "Viewer",
  FieldOfficer = "FieldOfficer",
}

const AddUserModal = ({
  onClick,
  isVisible,
  handleModalCloseButtonClick,
}: AddUserModalProps) => {
  if (!isVisible) return null;

  const { institutions, divisions, branches, beatOffices, fetchData } =
    useAuth();
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userOffice, setUserOffice] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleAddButtonClick = async () => {
    try {
      const API_URL = "http://localhost:8080";
      const token = await auth.currentUser?.getIdToken(true);
      const userOfficeId = userOffice;
      const body = JSON.stringify({
        userEmail,
        userPassword,
        userName,
        userOfficeId,
        userRole,
      });
      const newUserResponse = await fetch(
        `${API_URL}/api/user/admin/createUserByAdmin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: body,
        },
      );
      if (newUserResponse.ok) {
        await fetchData(auth.currentUser);
        alert("User Added.");
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
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>User Role:</label>
            <select
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option value={UserRole.SystemAdmin}>System Admin</option>
              <option value={UserRole.OfficeAdmin}>Office Admin</option>
              <option value={UserRole.ComplaintHandler}>
                Complaint Handler
              </option>
              <option value={UserRole.FieldOfficer}>Field Officer</option>
              <option value={UserRole.InvestigationHandler}>
                Investigation Handler
              </option>
              <option value={UserRole.Viewer} selected>
                Viewer
              </option>
            </select>
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Office:</label>
            <select
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setUserOffice(e.target.value)}
            >
              <option selected value="">
                Select Office
              </option>
              {institutions.map((institution: any) => (
                <option key={institution.id} value={institution.id}>
                  Institution: {institution.name}
                </option>
              ))}
              {divisions.map((division: any) => (
                <option key={division.id} value={division.id}>
                  Division: {division.name}
                </option>
              ))}
              {branches.map((branch: any) => (
                <option key={branch.id} value={branch.id}>
                  Branch: {branch.name}
                </option>
              ))}
              {beatOffices.map((beatOffice: any) => (
                <option key={beatOffice.id} value={beatOffice.id}>
                  Beat Office: {beatOffice.name}
                </option>
              ))}
            </select>
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
