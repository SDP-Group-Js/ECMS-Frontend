"use client";

import React, { useState } from "react";
import ComplaintStatusTag from "./ComplaintStatusTag";
import StartInvestigationModal from "./StartInvestigationModal";
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
    if (complaintStatus === "Processing") {
      setDetailsModalVisible(false);
      setAllocationModalVisible(true);
    }
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
        className="my-2 flex items-center justify-between rounded-xl border-2 border-gray-400 px-4 py-[0.75rem] hover:bg-gray-400"
        onClick={handleCardClick}
      >
        <div>{complaintId}</div>
        <div>{complaintTitle}</div>
        <div>{complaintComplainer?.name}</div>
        <div className="flex items-center justify-center space-x-10">
          <ComplaintStatusTag
            id={complaintId}
            complaintStatus={complaintStatus}
            onClick={handleStatusButtonClick}
          />
        </div>
      </div>
      {allocationModalVisible && complaintStatus === "Processing" && (
        <StartInvestigationModal
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
