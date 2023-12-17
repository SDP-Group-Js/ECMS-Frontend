import React from "react";
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

const InvestigationsTable = () => {
  return (
    <div>
      <InvestigationCard
        investigationId={1}
        investigationStatus={Status.NotAssigned}
        investigationOfficeId={null}
        investigationOfficeType={null}
        investigationOfficeName={null}
        investigationUpdateDate={new Date()}
      />
      <InvestigationCard
        investigationId={2}
        investigationStatus={Status.NotAssigned}
        investigationOfficeId={null}
        investigationOfficeType={null}
        investigationOfficeName={null}
        investigationUpdateDate={new Date()}
      />
      <InvestigationCard
        investigationId={3}
        investigationStatus={Status.Ongoing}
        investigationOfficeId="ccsss-444sfj-jgh33-ggyj8"
        investigationOfficeType={OfficeType.Division}
        investigationOfficeName="Central Province Wildlife Conservation Authority"
        investigationUpdateDate={new Date()}
      />
      <InvestigationCard
        investigationId={4}
        investigationStatus={Status.Ongoing}
        investigationOfficeId="ccsss-444sfj-jgh33-ggyj8"
        investigationOfficeType={OfficeType.Branch}
        investigationOfficeName="Sinharaja Wildlife Conservation Branch"
        investigationUpdateDate={new Date()}
      />
      <InvestigationCard
        investigationId={5}
        investigationStatus={Status.Completed}
        investigationOfficeId="ccsss-444sfj-jgh33-ggyj8"
        investigationOfficeType={OfficeType.BeatOffice}
        investigationOfficeName="Mattegoda West Beat Office"
        investigationUpdateDate={new Date()}
      />
    </div>
  );
};

export default InvestigationsTable;
