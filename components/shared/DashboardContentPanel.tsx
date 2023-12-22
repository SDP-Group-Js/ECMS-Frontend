"use client";

import React from "react";
import DashboardContentPanelHeader from "./DashboardContentPanelHeader";
import DashboardContentPanelBody from "./DashboardContentPanelBody";

interface DashboardContentPanelProps {
  assignedInvestigations: any;
  involvedInvestigations: any;
  office: any;
  complaints: any;
}

const DashboardContentPanel = ({
  assignedInvestigations,
  involvedInvestigations,
  office,
  complaints,
}: DashboardContentPanelProps) => {
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
      <DashboardContentPanelBody
        activeTab={activeTab}
        assignedInvestigations={assignedInvestigations}
        involvedInvestigations={involvedInvestigations}
        office={office}
        complaints={complaints}
      />
    </div>
  );
};

export default DashboardContentPanel;
