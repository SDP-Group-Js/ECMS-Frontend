"use client";

import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "@/context/complaintHandlerAuth";
import { auth } from "@/config/firebase";

type StartInvestigationModalProps = {
  isVisible: boolean;
  complaintId: number;
  complaintTitle: string | undefined;
  complaintDescription: string | undefined;
  complainer: any;
  handleCloseButtonClick: () => void;
};

const StartInvestigationModal = ({
  isVisible,
  complaintId,
  complaintTitle,
  complaintDescription,
  complainer,
  handleCloseButtonClick,
}: StartInvestigationModalProps) => {
  if (!isVisible) return null;

  const { institutions, fetchData } = useAuth();

  const [institution, setInstitution] = useState("");

  const handleAllocateComplaintButtonClick = async () => {
    const institutionId: string = institution;
    if (!institutionId || institutionId == "") {
      alert("Institution is required.");
      return;
    }

    try {
      const API_URL = "http://localhost:8080";
      const token = await auth.currentUser?.getIdToken(true);
      const body = JSON.stringify({
        complaintId,
        institutionId,
      });
      const response = await fetch(`${API_URL}/api/complaint`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: body,
      });
      if (response.ok) {
        alert("Complaint Allocated.");
        await fetchData(auth.currentUser);
        handleCloseButtonClick();
      } else {
        throw new Error("Complaint not allocated.");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div
          id="StartInvestigationModalTitle"
          className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3"
        >
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Allocate to Institution
          </h2>
          <button
            className="place-self-end rounded-lg p-2 text-2xl text-black hover:bg-red-500 hover:text-white"
            onClick={handleCloseButtonClick}
          >
            <IoCloseSharp />
          </button>
        </div>
        <div
          id="StartInvestigationModalContent"
          className="my-2 w-full flex-col justify-center text-xl"
        >
          <div className="mx-4 my-6 flex items-center justify-center">
            <label>Complaint Id:&nbsp;</label>
            <input
              type="text"
              value={complaintId}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              readOnly
            />
          </div>

          <div className="mx-4 my-6 flex items-center justify-center">
            <label>Complaint Title:&nbsp;</label>
            <input
              type="text"
              value={complaintTitle}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              readOnly
            />
          </div>

          <div className="mx-4 my-6 flex-col items-center justify-center">
            <label className="flex">Complaint Description:&nbsp;</label>
            <textarea
              value={complaintDescription}
              className="mt-2 flex w-full flex-grow rounded-lg border-2 p-2"
              readOnly
            />
          </div>

          <div className="mx-4 my-6 flex items-center justify-center">
            <label>Complainer:&nbsp;</label>
            <input
              type="text"
              value={complainer?.name}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              readOnly
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Institution:</label>
            <select
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setInstitution(e.target.value)
              }
            >
              <option value="" selected>
                Select Institution
              </option>
              {institutions.map((institution: any) => (
                <option key={institution.id} value={institution.Institution.id}>
                  {institution.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          id="StartInvestigationModalFooter"
          className="mx-1 my-1 flex items-center justify-center md:mx-3 lg:mx-5"
        >
          <button
            className="rounded-lg border-2 border-green-500 bg-green-500 p-2 text-white hover:border-green-500 hover:bg-white hover:text-green-500"
            onClick={handleAllocateComplaintButtonClick}
          >
            Allocate Complaint
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartInvestigationModal;
