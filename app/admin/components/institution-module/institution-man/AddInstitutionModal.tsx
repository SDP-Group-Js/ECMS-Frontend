"use client";

import { auth } from "@/config/firebase";
import { useAuth } from "@/context/adminAuth";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

type AddInstitutionModalProps = {
  isVisible: boolean;
  textToDisplay: string;
  onClick: () => void;
  handleModalCloseButtonClick: () => void;
};

enum OfficeType {
  Institution = "Institution",
  Division = "Division",
  Branch = "Branch",
  BeatOffice = "BeatOffice",
}

const AddInstitutionModal = ({
  onClick,
  isVisible,
  handleModalCloseButtonClick,
}: AddInstitutionModalProps) => {
  const [institutionName, setInstitutionName] = useState<string>("");
  const [institutionDescription, setInstitutionDescription] =
    useState<string>("");
  const { fetchData } = useAuth();

  if (!isVisible) return null;

  const handleAddButtonClick = async () => {
    const officeName: string = institutionName;
    const officeDescription: string = institutionDescription;
    const officeType: string = OfficeType.Institution;
    const parentOfficeId: null = null;

    if (
      !officeName ||
      !officeDescription ||
      !officeType ||
      officeName == "" ||
      officeDescription == "" ||
      officeType == ""
    ) {
      alert("All fields are required.");
      return;
    }

    try {
      const API_URL = "http://localhost:8080";
      const token = await auth.currentUser?.getIdToken(true);
      const body = JSON.stringify({
        officeName,
        officeDescription,
        officeType,
        parentOfficeId,
      });
      const newInstitutionResponse = await fetch(`${API_URL}/api/institution`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: body,
      });
      if (newInstitutionResponse.ok) {
        alert("Institution Added.");
        await fetchData(auth.currentUser);
        handleModalCloseButtonClick();
      } else {
        throw new Error("Institution not added.");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div
          id="EditInstitutitonModalTitle"
          className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3"
        >
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Add Institution
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
            <label>Institution Name:&nbsp;</label>
            <input
              type="text"
              placeholder="Enter Institute Name"
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => {
                setInstitutionName(e.target.value);
              }}
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Institution Description:&nbsp;</label>
            <input
              type="text"
              placeholder="Enter Institute Description"
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => {
                setInstitutionDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          id="AddInstitutionModalFooter"
          className="mx-1 my-1 flex items-center justify-center md:mx-3 lg:mx-5"
        >
          <button
            className="rounded-lg border-2 border-green-700 bg-green-700 p-2 text-white hover:border-green-700 hover:bg-white hover:text-green-700"
            onClick={handleAddButtonClick}
          >
            Add Institution
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddInstitutionModal;
