import React from "react";
import InvestigationsTable from "../investigation-module/InvestigationsTable";

type props = {
  activeTab: string;
};

const DashboardContentPanelBody = ({ activeTab }: props) => {
  return (
    <div className='border-2 border-gray-700 rounded-md p-4'>
      <div
        className={activeTab === "complaints" ? "block px-2 py-1" : "hidden"}
      >
        Complaints
      </div>

      <div
        className={
          activeTab === "investigations" ? "block px-2 py-1" : "hidden"
        }
      >
        <InvestigationsTable />
      </div>

      <div className={activeTab === "workflows" ? "block px-2 py-1" : "hidden"}>
        Workflows
      </div>
    </div>
  );
};

export default DashboardContentPanelBody;
