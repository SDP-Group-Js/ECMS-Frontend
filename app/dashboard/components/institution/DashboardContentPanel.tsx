"use client";

import React from "react";
import DashboardContentPanelHeader from "./DashboardContentPanelHeader";
import DashboardContentPanelBody from "./DashboardContentPanelBody";

const DashboardContentPanel = () => {
  const [activeTab, setActiveTab] = React.useState("complaints");

  const handleComplaintsClick = () => {
    setActiveTab("complaints");
  };


  return (
    <div className="text-xl">
      <DashboardContentPanelHeader
        onComplaintsClick={handleComplaintsClick}
        activeTab={activeTab}
      />
      <DashboardContentPanelBody activeTab={activeTab} />
    </div>
  );
};

export default DashboardContentPanel;
