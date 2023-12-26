import React from "react";
import OfficeCard from "./OfficeCard";

type props = {
  beatOffices: any;
};

const OfficesTable = ({ beatOffices }: props) => {
  return (
    <div>
      {beatOffices.map((beatOffice: any) => {
        return (
          <OfficeCard
            officeId={beatOffice.id}
            officeName={beatOffice.name}
            officeType="Beat Office"
            officeDescription={beatOffice.description}
            officeParentBranchName={beatOffice.BeatOffice.Branch.office.name}
          />
        );
      })}
    </div>
  );
};

export default OfficesTable;
