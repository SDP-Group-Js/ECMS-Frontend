import React, { useEffect } from "react";
import InvestigationCard from "./InvestigationCard";

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
}

const ViewInvestigations = ({
  assignedInvestigations,
  involvedInvestigations,
}: ViewInvestigationsProps) => {
  return (
    <div>
      <div>
        <div className="my-2 text-xl font-bold">Main Investigations</div>
        {assignedInvestigations.map((investigation: any, index: number) => (
          <InvestigationCard
            investigationId={investigation.id}
            investigationStatus={investigation.status}
            investigationOfficeId={investigation.officeId}
            investigationOfficeType={null}
            investigationOfficeName={null}
            investigationUpdateDate={new Date()}
          />
        ))}
      </div>
      <div>
        <div className="mb-2 mt-6 text-xl font-bold">
          Involved Investigations
        </div>
        {involvedInvestigations.map((investigation: any, index: number) => (
          <InvestigationCard
            investigationId={investigation.id}
            investigationStatus={investigation.status}
            investigationOfficeId={investigation.officeId}
            investigationOfficeType={null}
            investigationOfficeName={null}
            investigationUpdateDate={new Date()}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewInvestigations;
