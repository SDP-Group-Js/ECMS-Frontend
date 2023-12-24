import React, { useState } from "react";
import InvestigationStatusTag from "./InvestigationStatusTag";
import AllocateInvestigationModal from "./AllocateInvestigationModal";
import InvestigationWorkflowStatusTag from "./InvestigationWorkflowStatusTag";
import SetInvestigationWorkflow from "../workflow/SetInvestigationWorkflow";

type props = {
  investigationId: number;
  investigationStatus: string;
  investigationComplaintId: number;
  investigationOffice: any;
  investigationWorkflow: any;
  officeWorkflows: any;
  childOffices: any;
};

const InvestigationCard = ({
  investigationId,
  investigationStatus,
  investigationComplaintId,
  investigationOffice,
  investigationWorkflow,
  officeWorkflows,
  childOffices,
}: props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [allocateWorkflowModalVisible, setAllocateWorkflowModalVisible] =
    useState(false);

  let investigationHasWorkflow = false;
  if (investigationWorkflow != null) {
    investigationHasWorkflow = true;
  }

  const handleInvestigationClick = () => {
    window.open(`dashboard/${investigationId}`, "_blank");
  };

  const handleStatusButtonClick = () => {
    setModalVisible(true);
  };

  const handleWorkflowButtonClick = () => {
    setAllocateWorkflowModalVisible(true);
  };

  const handleModalCloseButtonClick = () => {
    setModalVisible(false);
    setAllocateWorkflowModalVisible(false);
  };

  return (
    <>
      <div
        className="my-2 flex items-center justify-between rounded-xl border-2 border-gray-400 px-4 py-[0.75rem] hover:bg-gray-400"
        onClick={handleInvestigationClick}
      >
        <div>{investigationId}</div>
        <div className="flex items-center justify-center space-x-10">
          <div className="w-30 flex items-center justify-center">
            Complaint Id: {investigationComplaintId}
          </div>
          <div className="w-30 flex items-center justify-center">
            <InvestigationWorkflowStatusTag
              id={investigationId}
              investigationWorkflow={investigationWorkflow}
              onClick={handleWorkflowButtonClick}
            />
          </div>
          <div className="w-30 flex items-center justify-center">
            <InvestigationStatusTag
              id={investigationId}
              investigationStatus={investigationStatus}
              onClick={handleStatusButtonClick}
            />
          </div>
        </div>
      </div>
      {modalVisible && investigationStatus === "NotAssigned" && (
        <AllocateInvestigationModal
          isVisible={modalVisible}
          investigationId={investigationId}
          childOffices={childOffices}
          handleCloseButtonClick={handleModalCloseButtonClick}
        />
      )}
      {modalVisible && investigationStatus === "Ongoing" && (
        <AllocateInvestigationModal
          isVisible={modalVisible}
          investigationId={investigationId}
          childOffices={childOffices}
          handleCloseButtonClick={handleModalCloseButtonClick}
        />
      )}
      {allocateWorkflowModalVisible && !investigationHasWorkflow && (
        <SetInvestigationWorkflow
          investigationId={investigationId}
          institutionWorkflows={officeWorkflows}
          closeForm={handleModalCloseButtonClick}
        />
      )}
    </>
  );
};

export default InvestigationCard;
