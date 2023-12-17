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
    <div className="flex items-center justify-start space-x-6 font-bold">
      <button
        onClick={onComplaintsClick}
        className={
          activeTab === "complaints"
            ? "rounded-t-md bg-gray-700 px-10 py-[0.5rem] text-white"
            : ""
        }
      >
        Complaints
      </button>
      <button
        onClick={onInvestigationsClick}
        className={
          activeTab === "investigations"
            ? "rounded-t-md bg-gray-700 px-10 py-[0.5rem] text-white"
            : ""
        }
      >
        Investigations
      </button>
      <button
        onClick={onWorkflowsClick}
        className={
          activeTab === "workflows"
            ? "rounded-t-md bg-gray-700 px-10 py-[0.5rem] text-white"
            : ""
        }
      >
        Workflows
      </button>
    </div>
  );
};

export default DashboardContentPanelHeader;
