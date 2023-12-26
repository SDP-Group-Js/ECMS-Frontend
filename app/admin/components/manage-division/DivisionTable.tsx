import React from "react";
import DivisionCard from "./DivisionCard";

type props = {
  divisions: any;
};

const DivisionTable = ({ divisions }: props) => {
  return (
    <div>
      {divisions.map((division: any) => {
        return (
          <DivisionCard
            divisionId={division.id}
            divisionName={division.name}
            divisionType="Division"
            divisionDescription={division.description}
            divisionParentInstitutionName={
              division.Division.Institution.office.name
            }
          />
        );
      })}
    </div>
  );
};

export default DivisionTable;
