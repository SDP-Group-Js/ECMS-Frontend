"use client";

import React from "react";
import DashboardContentPanelHeader from "./DashboardContentPanelHeader";
import DashboardContentPanelBody from "./DashboardContentPanelBody";

const DashboardContentPanel = () => {
  const [activeTab, setActiveTab] = React.useState("complaints");

  const handleComplaintsClick = () => {
    setActiveTab("complaints");
  };

  const handleInvestigationsClick = () => {
    setActiveTab("investigations");
  };

  const handleWorkflowsClick = () => {
    setActiveTab("workflows");
  };

  return (
    <div className="text-xl">
      <DashboardContentPanelHeader
        onComplaintsClick={handleComplaintsClick}
        onInvestigationsClick={handleInvestigationsClick}
        onWorkflowsClick={handleWorkflowsClick}
        activeTab={activeTab}
      />
      <DashboardContentPanelBody activeTab={activeTab} />
    </div>
  );
};

export default DashboardContentPanel;
