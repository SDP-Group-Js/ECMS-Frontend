import React from "react";
import OfficeCard from "./OfficeCard";


const OfficesTable = () => {
  return (
    <div>
      <OfficeCard
        officeId={1}
        officeName="office Name"
        officeType="office Type" //The Type
        officeDescription="Description"
      />
      <OfficeCard
        officeId={1}
        officeName="office Name"
        officeType="office Type"
        officeDescription="Description"
      />
      <OfficeCard
        officeId={1}
        officeName="office Name"
        officeType="office Type"
        officeDescription="Description"
      />
      <OfficeCard
        officeId={1}
        officeName="office Name"
        officeType="office Type"
        officeDescription="Description"
      />
      <OfficeCard
        officeId={1}
        officeName="office Name"
        officeType="office Type"
        officeDescription="Description"
      />
    </div>
  );
};

export default OfficesTable;
