import React, { useEffect } from "react";
import InvestigationCard from "./InvestigationCard";
import InvolvedInvestigationCard from "./InvolvedInvestigationCard";

enum Status {
  NotAssigned = "NotAssigned",
  Ongoing = "Ongoing",
  Completed = "Completed",
}

enum OfficeType {
  Division = "Division",
  Branch = "Branch",
  BeatOffice = "Beat Office",
}

interface ViewInvestigationsProps {
  assignedInvestigations: any;
  involvedInvestigations: any;
  office: any;
  childOffices: any;
}

const ViewInvestigations = ({
  assignedInvestigations,
  involvedInvestigations,
  office,
  childOffices,
}: ViewInvestigationsProps) => {
  return (
    <div>
      <div>
        <div className="my-2 text-xl font-bold">Main Investigations</div>
        {assignedInvestigations.map((investigation: any, index: number) => (
          <InvestigationCard
            investigationId={investigation.id}
            investigationStatus={investigation.status}
            investigationDescription={investigation.description}
            investigationComplaintId={investigation.complaintId}
            investigationOffice={investigation.office}
            investigationWorkflow={investigation.institutionWorkflow}
            officeWorkflows={office.workflows}
            childOffices={childOffices}
          />
        ))}
      </div>
      <div>
        <div className="mb-2 mt-6 text-xl font-bold">
          Involved Investigations
        </div>
        {involvedInvestigations.map((investigation: any, index: number) => (
          <InvolvedInvestigationCard
            investigationId={investigation.id}
            investigationStatus={investigation.status}
            investigationDescription={investigation.description}
            investigationComplaintId={investigation.complaintId}
            investigationOffice={office}
            investigationWorkflow={investigation.institutionWorkflow}
            officeWorkflows={office.workflows}
            childOffices={childOffices}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewInvestigations;
