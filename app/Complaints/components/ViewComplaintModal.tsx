"use client";

import React, { ChangeEvent, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

type ViewComplaintModalProps = {
  isVisible: boolean;
  complaintId: number;
  complaintTitle: string | undefined;
  complaintDescription: string | undefined;
  complainer: any;
  investigation: any;
  handleCloseButtonClick: () => void;
};

const ViewComplaintModal = ({
  isVisible,
  complaintId,
  complaintTitle,
  complaintDescription,
  complainer,
  investigation,
  handleCloseButtonClick,
}: ViewComplaintModalProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[400px] flex-col rounded-lg bg-white p-2 md:w-[550px] lg:w-[600px]">
        <div
          id="ViewComplaintModalTitle"
          className="mx-1 flex items-center justify-between md:mx-2 lg:mx-3"
        >
          <h2 className="text-base font-bold md:text-lg lg:text-xl">
            Complaint #{complaintId}
          </h2>
          <button
            className="place-self-end rounded-lg p-2 text-2xl text-black hover:bg-red-500 hover:text-white"
            onClick={handleCloseButtonClick}
          >
            <IoCloseSharp />
          </button>
        </div>
        <div
          id="ViewComplaintModalContent"
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
        </div>
      </div>
    </div>
  );
};

export default ViewComplaintModal;
