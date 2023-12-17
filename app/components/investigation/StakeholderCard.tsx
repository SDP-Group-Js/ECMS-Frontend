import React from "react";
import ViewRelationButton from "./ViewRelationButton";

type StakeholderCardProps = {
  investigationId: number;
  officeId: string;
};

const StakeholderCard = ({
  investigationId,
  officeId,
}: StakeholderCardProps) => {
  return (
    <div className="mx-2 my-2 flex w-full items-center justify-start space-x-10 rounded-md border-2 border-gray-400 px-2 py-2">
      <span>[Office Name]</span>
      <span>[Office Type]</span>
      <ViewRelationButton
        relationId={officeId}
        textToDisplay="View Office"
        onClick={() => {}}
      />
    </div>
  );
};

export default StakeholderCard;
