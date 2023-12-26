import React, { useState } from "react";
import InvestigationStatusTag from "./InvestigationStatusTag";
import AllocateInvestigationModal from "./AllocateInvestigationModal";
import InvestigationWorkflowStatusTag from "./InvestigationWorkflowStatusTag";
import SetInvestigationWorkflow from "../workflow/SetInvestigationWorkflow";

type props = {
  investigationId: number;
  investigationStatus: string;
  investigationDescription: string;
  investigationComplaintId: number;
  investigationOffice: any;
  investigationWorkflow: any;
  officeWorkflows: any;
  childOffices: any;
};

const InvestigationCard = ({
  investigationId,
  investigationStatus,
  investigationDescription,
  investigationComplaintId,
  investigationOffice,
  investigationWorkflow,
  officeWorkflows,
  childOffices,
}: props) => {
  let investigationHasWorkflow = false;
  if (investigationWorkflow != null) {
    investigationHasWorkflow = true;
  }

  const handleInvestigationClick = () => {
    window.open(`dashboard/${investigationId}`, "_blank");
  };

  return (
    <>
      <div
        className="my-2 flex items-center justify-between rounded-xl border-2 border-gray-400 px-4 py-[0.75rem] hover:bg-gray-400"
        onClick={handleInvestigationClick}
      >
        <div>{investigationId}</div>
        <div className="ml-2 w-[50rem]">{investigationDescription}</div>
        <div className="flex items-center justify-center space-x-10">
          <div className="w-30 flex items-center justify-start">
            Complaint Id: {investigationComplaintId}
          </div>
          <div className="w-30 flex items-center justify-center">
            <InvestigationWorkflowStatusTag
              id={investigationId}
              investigationWorkflow={investigationWorkflow}
              onClick={() => {}}
            />
          </div>
          <div className="w-30 flex items-center justify-center">
            <InvestigationStatusTag
              id={investigationId}
              investigationStatus={investigationStatus}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestigationCard;
