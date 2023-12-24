import React from "react";
import ViewRelationButton from "./ViewRelationButton";

type StakeholderCardProps = {
  stakeholder: any;
};

enum OfficeType {
  Institution = "Institution",
  Division = "Division",
  Branch = "Branch",
  BeatOffice = "Beat Office",
}
const StakeholderCard = ({ stakeholder }: StakeholderCardProps) => {
  let stakeholderType = OfficeType.BeatOffice;
  if (stakeholder.Institution != null) {
    stakeholderType = OfficeType.Institution;
  } else if (stakeholder.Division != null) {
    stakeholderType = OfficeType.Division;
  } else if (stakeholder.Branch != null) {
    stakeholderType = OfficeType.Branch;
  }

  return (
    <div className="mx-2 my-2 flex w-full items-center justify-start space-x-10 rounded-md border-2 border-gray-400 px-2 py-2">
      <span>{stakeholder.name} : </span>
      <span>{stakeholderType}</span>
    </div>
  );
};

export default StakeholderCard;
