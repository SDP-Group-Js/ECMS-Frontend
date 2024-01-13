"use client";

import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "@/context/adminAuth";
import { auth } from "@/config/firebase";

type EditUserModalProps = {
  isVisible: boolean;
  userId: string;
  userName: string | null;
  userOfficeId: string | null;
  userType: string | null;
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

const EditUserModal = ({
  isVisible,
  handleModalCloseButtonClick,
  userId,
  userName,
  userOfficeId,
  userType,
}: EditUserModalProps) => {
  const { institutions, divisions, branches, beatOffices, fetchData } =
    useAuth();

  const [newUserName, setNewUserName] = useState(userName);
  const [newUserRole, setNewUserRole] = useState(userType);
  const [newUserOffice, setNewUserOffice] = useState(userOfficeId);

  if (!isVisible) return null;

  const handleEditButtonClick = async () => {
    try {
      const API_URL = "http://localhost:8080";
      const token = await auth.currentUser?.getIdToken(true);
      const userName = newUserName;
      const userRole = newUserRole;
      const userOfficeId = newUserOffice;
      const body = JSON.stringify({
        userId,
        userName,
        userOfficeId,
        userRole,
      });
      const updatedUserResponse = await fetch(`${API_URL}/api/user/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: body,
      });
      if (updatedUserResponse.ok) {
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
              value={userId ?? ""}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              readOnly
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>User Name:&nbsp;</label>
            <input
              type="text"
              //value={userName ?? ""}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>User Role</label>
            <select
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setNewUserRole(e.target.value)}
            >
              {userType === UserRole.SystemAdmin ? (
                <option value={UserRole.SystemAdmin} selected>
                  System Admin
                </option>
              ) : (
                <option value={UserRole.SystemAdmin}>System Admin</option>
              )}
              {userType === UserRole.OfficeAdmin ? (
                <option value={UserRole.OfficeAdmin} selected>
                  Office Admin
                </option>
              ) : (
                <option value={UserRole.OfficeAdmin}>System Admin</option>
              )}
              {userType === UserRole.ComplaintHandler ? (
                <option value={UserRole.ComplaintHandler} selected>
                  Complaint handler
                </option>
              ) : (
                <option value={UserRole.ComplaintHandler}>System Admin</option>
              )}
              {userType === UserRole.InvestigationHandler ? (
                <option value={UserRole.InvestigationHandler} selected>
                  Investigation Handler
                </option>
              ) : (
                <option value={UserRole.InvestigationHandler}>
                  System Admin
                </option>
              )}
              {userType === UserRole.FieldOfficer ? (
                <option value={UserRole.FieldOfficer} selected>
                  Field Officer
                </option>
              ) : (
                <option value={UserRole.FieldOfficer}>System Admin</option>
              )}
              {userType === UserRole.Viewer ? (
                <option value={UserRole.Viewer} selected>
                  Viewer
                </option>
              ) : (
                <option value={UserRole.Viewer}>System Admin</option>
              )}
            </select>
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Office</label>
            <select
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setNewUserOffice(e.target.value)}
            >
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
