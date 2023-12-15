import React from "react";

type props = {
  onComplaintsClick: () => void;
  onInvestigationsClick: () => void;
  onWorkflowsClick: () => void;
  activeTab: string;
};

const DashboardContentPanelHeader = ({
  onComplaintsClick,
  onInvestigationsClick,
  onWorkflowsClick,
  activeTab,
}: props) => {
  return (
    <div className='font-bold flex justify-start items-center space-x-6'>
      <button
        onClick={onComplaintsClick}
        className={
          activeTab === "complaints"
            ? "text-white bg-gray-700 rounded-t-md px-10 py-1"
            : ""
        }
      >
        Complaints
      </button>
      <button
        onClick={onInvestigationsClick}
        className={
          activeTab === "investigations"
            ? "text-white bg-gray-700 rounded-t-md px-10 py-1"
            : ""
        }
      >
        Investigations
      </button>
      <button
        onClick={onWorkflowsClick}
        className={
          activeTab === "workflows"
            ? "text-white bg-gray-700 rounded-t-md px-10 py-1"
            : ""
        }
      >
        Workflows
      </button>
    </div>
  );
};

export default DashboardContentPanelHeader;
