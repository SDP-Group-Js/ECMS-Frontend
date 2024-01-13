"use client";

import { auth } from "@/config/firebase";
import { useAuth } from "@/context/auth";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

type AllocateInvestigationModalProps = {
  isVisible: boolean;
  investigationId: number;
  childOffices: any;
  handleCloseButtonClick: () => void;
};

const AllocateInvestigationModal = ({
  isVisible,
  handleCloseButtonClick,
  investigationId,
  childOffices,
}: AllocateInvestigationModalProps) => {
  const [officeId, setOfficeId] = useState("");

  const { fetchData } = useAuth();

  if (!isVisible) return null;

  const handleAllocateInvestigationButtonClick = async () => {
    try {
      const API_URL = "http://localhost:8080";
      const token = await auth.currentUser?.getIdToken(true);
      if (officeId == null || officeId == "") {
        alert("Please select an office");
        return;
      }
      const body = JSON.stringify({
        officeId,
      });
      const allocationResponse = await fetch(
        `${API_URL}/api/investigation/${investigationId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: body,
        },
      );
      if (allocationResponse.ok) {
        alert(
          `Investigation Id: ${investigationId} allocated to office Id: ${officeId}`,
        );
        await fetchData(auth.currentUser);
        handleCloseButtonClick();
      } else {
        throw new Error(
          `Investigation could not be allocated to office Id: ${officeId}.`,
        );
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div
          id="AllocateInvestigationModalTitle"
          className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3"
        >
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Allocate Investigation
          </h2>
          <button
            className="place-self-end rounded-lg p-2 text-2xl text-black hover:bg-red-500 hover:text-white"
            onClick={handleCloseButtonClick}
          >
            <IoCloseSharp />
          </button>
        </div>
        <div
          id="AllocateInvestigationModalContent"
          className="my-2 w-full flex-col justify-center text-xl"
        >
          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Investigation Id:&nbsp;</label>
            <input
              type="text"
              value={investigationId}
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              readOnly
            />
          </div>

          <div className="mx-4 my-4 flex items-center justify-center">
            <label>Office:</label>
            <select
              className="ml-2 flex-grow rounded-lg border-2 p-2"
              onChange={(e) => setOfficeId(e.target.value)}
            >
              <option value="" selected>
                Select an office
              </option>
              {childOffices.length > 0 ? (
                childOffices.map((office: any) => (
                  <option key={office.office.id} value={office.office.id}>
                    {office.office.name}
                  </option>
                ))
              ) : (
                <option>Investigation already reached a beat office.</option>
              )}
            </select>
          </div>
        </div>
        {childOffices.length > 0 && (
          <div
            id="AllocateInvestigationModalFooter"
            className="mx-1 my-1 flex items-center justify-center md:mx-3 lg:mx-5"
          >
            <button
              className="rounded-lg border-2 border-green-700 bg-green-700 p-2 text-white hover:border-green-700 hover:bg-white hover:text-green-700"
              onClick={handleAllocateInvestigationButtonClick}
            >
              Allocate Investigation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllocateInvestigationModal;
