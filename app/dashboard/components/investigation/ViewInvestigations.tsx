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

const ViewInvestigations = ({ office }: any) => {

  useEffect(() => {
    const checkOffice = () => {
      if (office.institutions) {
        // make a request to get investigations that are assigned to their children
        
      }
    }
  }, [office])

  return (
    <div>
      View Investigations
      {/* <div>
        <div>Main Investigations</div>
        {office.assignedInvestigation.map((investigation, index) => (
          <InvestigationCard
            investigationId={1}
            investigationStatus={Status.NotAssigned}
            investigationOfficeId={null}
            investigationOfficeType={null}
            investigationOfficeName={null}
            investigationUpdateDate={new Date()}
          />
        ))}
      </div>
      <div>
        <div>Involved Investigations</div>
        {office.involvedInvestigations.map((investigation, index) => (
          <InvestigationCard
            investigationId={1}
            investigationStatus={Status.NotAssigned}
            investigationOfficeId={null}
            investigationOfficeType={null}
            investigationOfficeName={null}
            investigationUpdateDate={new Date()}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ViewInvestigations;
