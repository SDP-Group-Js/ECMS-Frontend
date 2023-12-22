import React from "react";
import InvestigationStatusTag from "../investigation/InvestigationStatusTag";

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
  let complaintStatus = "Processing";
  if (complaintInvestigation != null) {
    complaintStatus = complaintInvestigation.status;
  }

  return (
    <div className="my-2 flex items-center justify-between rounded-xl border-2 border-gray-400 px-4 py-[0.75rem]">
      <div>{complaintId}</div>
      <div>{complaintTitle}</div>
      <div>{complaintComplainer?.name}</div>
      <div className="flex items-center justify-center space-x-10">
        <InvestigationStatusTag
          id={complaintId}
          investigationStatus={complaintStatus}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ComplaintCard;
