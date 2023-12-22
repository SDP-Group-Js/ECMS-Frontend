import ViewComplaints from "@/app/dashboard/components/complaints/ViewComplaints";
import InvestigationsTable from "@/app/dashboard/components/investigation/ViewInvestigations";
import ViewWorkflows from "@/app/dashboard/components/workflow/ViewWorkflows";
import React from "react";

type props = {
  activeTab: string;
  assignedInvestigations: any;
  involvedInvestigations: any;
  office: any;
  complaints: any;
};

const DashboardContentPanelBody = ({
  activeTab,
  assignedInvestigations,
  involvedInvestigations,
  office,
  complaints,
}: props) => {
  return (
    <div className="rounded-md border-2 border-gray-400 p-4">
      <div
        className={activeTab === "complaints" ? "block px-2 py-1" : "hidden"}
      >
        <ViewComplaints complaints={complaints} />
      </div>

      <div
        className={
          activeTab === "investigations" ? "block px-2 py-1" : "hidden"
        }
      >
        <InvestigationsTable
          assignedInvestigations={assignedInvestigations}
          involvedInvestigations={involvedInvestigations}
        />
      </div>

      <div className={activeTab === "workflows" ? "block px-2 py-1" : "hidden"}>
        <ViewWorkflows office={office} />
      </div>
    </div>
  );
};

export default DashboardContentPanelBody;
