import React from "react";

type props = {
  onComplaintsClick: () => void;
  activeTab: string;
};

const DashboardContentPanelHeader = ({
  onComplaintsClick,
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
    </div>
  );
};

export default DashboardContentPanelHeader;
