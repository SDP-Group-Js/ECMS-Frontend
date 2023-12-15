import React from "react";
import InvestigationCard from "./InvestigationCard";

const InvestigationsTable = () => {
  return (
    <div>
      <InvestigationCard
        investigationId={1}
        investigationStatus='Not Allocated'
        investigationOfficeId='CSC'
        investigationUpdateDate={new Date()}
      />
      <InvestigationCard
        investigationId={2}
        investigationStatus='Allocated'
        investigationOfficeId='WOW'
        investigationUpdateDate={new Date()}
      />
    </div>
  );
};

export default InvestigationsTable;
