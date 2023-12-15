import React from "react";
import InvestigationStatusTag from "./InvestigationStatusTag";

type props = {
  investigationId: number;
  investigationStatus: string;
  investigationOfficeId: string;
  investigationUpdateDate: Date;
};

const InvestigationCard = ({
  investigationId,
  investigationStatus,
  investigationOfficeId,
  investigationUpdateDate,
}: props) => {
  return (
    <div className='border-2 border-gray-700 rounded-xl px-4 py-2 flex justify-between items-center my-2'>
      <div>{investigationId}</div>
      <div className='flex justify-center items-center space-x-10'>
        <span>
          <InvestigationStatusTag status={investigationStatus} />
        </span>
        <span
          className={investigationStatus === "Allocated" ? "block" : "hidden"}
        >
          {investigationOfficeId}
        </span>
        <span>{investigationUpdateDate.toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default InvestigationCard;
