import React from "react";
import InstitutionCard from "./InstitutionCard";

type props = {
  institutions: any;
};

const InstitutionTable = ({ institutions }: props) => {
  return (
    <div>
      {institutions.map((institution: any) => {
        return (
          <InstitutionCard
            institutionId={institution.id}
            institutionName={institution.name}
            institutionType="Institution"
            institutionDescription={institution.description}
          />
        );
      })}
    </div>
  );
};

export default InstitutionTable;
