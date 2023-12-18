import React from "react";
import InstitutionCard from "./InstitutionCard";


const InstitutionTable = () => {
  return (
    <div>
      <InstitutionCard
        institutionId={1}
        institutionName="institution Name"
        institutionType="institution Type" //The Type
        institutionDescription="Description"
      />
      <InstitutionCard
        institutionId={1}
        institutionName="institution Name"
        institutionType="institution Type"
        institutionDescription="Description"
      />
      <InstitutionCard
        institutionId={1}
        institutionName="institution Name"
        institutionType="institution Type"
        institutionDescription="Description"
      />
      <InstitutionCard
        institutionId={1}
        institutionName="institution Name"
        institutionType="institution Type"
        institutionDescription="Description"
      />
      <InstitutionCard
        institutionId={1}
        institutionName="institution Name"
        institutionType="institution Type"
        institutionDescription="Description"
      />
    </div>
  );
};

export default InstitutionTable;
