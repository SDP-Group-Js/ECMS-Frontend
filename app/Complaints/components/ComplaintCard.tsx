"use client";

import React, { useState } from "react";
import ComplaintStatusTag from "./ComplaintStatusTag";
import AllocateComplaintModal from "./AllocateComplaintModal";
import ViewComplaintModal from "./ViewComplaintModal";

type ComplaintCardProps = {
  complaintId: number;
  complaintTitle: string;
  complaintDescription: string;
  complaintComplainer: any;
  complaintInvestigation: any;
};

const ComplaintCard = ({
  complaintId,
  complaintTitle,
  complaintDescription,
  complaintComplainer,
  complaintInvestigation,
}: ComplaintCardProps) => {
  const [allocationModalVisible, setAllocationModalVisible] = useState(false);
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);

  let complaintStatus = "Processing";
  if (complaintInvestigation != null) {
    complaintStatus = complaintInvestigation.status;
  }

  const handleStatusButtonClick = () => {
    setDetailsModalVisible(false);
    setAllocationModalVisible(true);
  };
  const handleCardClick = () => {
    setDetailsModalVisible(true);
  };

  const handleModalCloseButtonClick = () => {
    setAllocationModalVisible(false);
    setDetailsModalVisible(false);
  };

  return (
    <>
      <div
        className="my-2 flex items-center justify-start space-x-10 rounded-xl border-2 border-gray-400 px-4 py-[0.75rem] hover:bg-gray-400"
        onClick={handleCardClick}
      >
        <div className="w-10">{complaintId}</div>
        <div className="w-[25rem]">{complaintTitle}</div>
        <div className="w-60">{complaintComplainer?.name}</div>
        <div className="flex flex-grow items-center justify-end space-x-10">
          <ComplaintStatusTag
            id={complaintId}
            complaintStatus={complaintStatus}
            onClick={handleStatusButtonClick}
          />
        </div>
      </div>
      {allocationModalVisible && complaintStatus === "Processing" && (
        <AllocateComplaintModal
          isVisible={allocationModalVisible}
          complaintId={complaintId}
          complaintTitle={complaintTitle}
          complaintDescription={complaintDescription}
          complainer={complaintComplainer}
          handleCloseButtonClick={handleModalCloseButtonClick}
        />
      )}
      {detailsModalVisible && (
        <ViewComplaintModal
          isVisible={detailsModalVisible}
          complaintId={complaintId}
          complaintTitle={complaintTitle}
          complaintDescription={complaintDescription}
          complainer={complaintComplainer}
          investigation={complaintInvestigation}
          handleCloseButtonClick={handleModalCloseButtonClick}
        />
      )}
    </>
  );
};

export default ComplaintCard;
