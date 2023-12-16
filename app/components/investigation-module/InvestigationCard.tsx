import React from "react";
import InvestigationStatusTag from "./InvestigationStatusTag";

type props = {
  investigationId: number;
  investigationStatus: string;
  investigationOfficeId: string | null;
  investigationOfficeType: string | null;
  investigationOfficeName: string | null;
  investigationUpdateDate: Date;
};

const InvestigationCard = ({
  investigationId,
  investigationStatus,
  investigationOfficeId,
  investigationOfficeType,
  investigationOfficeName,
  investigationUpdateDate,
}: props) => {
  return (
    <div className="my-2 flex items-center justify-between rounded-xl border-2 border-gray-400 px-4 py-[0.75rem]">
      <div>{investigationId}</div>
      <div className="flex items-center justify-center space-x-10">
        <div
          className={investigationStatus === "NotAssigned" ? "hidden" : "block"}
        >
          {investigationOfficeType}: {investigationOfficeName}
        </div>
        <div className="w-30 flex items-center justify-center">
          <InvestigationStatusTag
            investigationId={investigationId}
            investigationStatus={investigationStatus}
          />
        </div>
        <div>{investigationUpdateDate.toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default InvestigationCard;
