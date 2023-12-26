"use client";

import { auth } from "@/config/firebase";
import { useAuth } from "@/context/adminAuth";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

type EditOfficeModalProps = {
  isVisible: boolean;
  officeId: number;
  officeName: string;
  officeDescription: string;
  officeType: string;
  handleModalCloseButtonClick: () => void;
};

enum OfficeType {
  Institution = "Institution",
  Division = "Division",
  Branch = "Branch",
  BeatOffice = "BeatOffice",
}

const EditOfficeModal = ({
  isVisible,
  handleModalCloseButtonClick,
  officeId,
  officeName,
  officeDescription,
  officeType,
}: EditOfficeModalProps) => {
  if (!isVisible) return null;

  const [name, setName] = useState(officeName);
  const [description, setDescription] = useState(officeDescription);

  const { fetchData } = useAuth();

  const handleEditButtonClick = async () => {
    const officeName: string = name;
    const officeDescription: string = description;
    const officeType: string = OfficeType.Branch;
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
      });
      const newInstitutionResponse = await fetch(
        `${API_URL}/api/institution/${officeId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: body,
        },
      );
      if (newInstitutionResponse.ok) {
        alert("Beat Office Updated.");
        await fetchData(auth.currentUser);
        handleModalCloseButtonClick();
      } else {
        throw new Error("Beat Office not updated.");
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
            Edit Office
          </h2>
          <button
            className="place-self-end rounded-lg p-2 text-2xl text-black hover:bg-red-500 hover:text-white"
            onClick={handleModalCloseButtonClick}
          >
            <IoCloseSharp />
          </button>
        </div>
        <div
          id="EditofficeModalContent"
          className="my-2 w-full flex-col justify-center text-xl"
        >
          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Office Id:&nbsp;</label>
            <input
              type="text"
              value={officeId}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              readOnly
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Beat Office Name:&nbsp;</label>
            <input
              type="text"
              //value={officeName}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Beat Office Description:&nbsp;</label>
            <input
              type="text"
              //value={officeDescription ?? ""}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div
          id="EditOfficeModalFooter"
          className="mx-1 my-1 flex items-center justify-center md:mx-3 lg:mx-5"
        >
          <button
            className="rounded-lg border-2 border-green-700 bg-green-700 p-2 text-white hover:border-green-700 hover:bg-white hover:text-green-700"
            onClick={handleEditButtonClick}
          >
            Edit Beat Office
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOfficeModal;
