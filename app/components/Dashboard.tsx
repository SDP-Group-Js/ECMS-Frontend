import React from "react";
import ViewInstitutionWorkflows from "./workflow/ViewInstitutionWorkflows";
import ViewComplaints from "./complaints/ViewComplaints";

const Dashboard = ({ institution }: any) => {
  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-slate-50">
      <div className="flex-1">
        <div>{institution.name}</div>
        <ViewComplaints complaints={institution.complaints} />
        <Investigations investigations={institution.investigations} />
        <ViewInstitutionWorkflows workflows={institution.workflows} />
      </div>
    </div>
  );
};

export default Dashboard;