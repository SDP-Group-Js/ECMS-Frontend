import React from "react";
import StakeholderCard from "./StakeholderCard";

type StakeholderListProps = {
  investigationId: number;
};

const StakeholderList = ({ investigationId }: StakeholderListProps) => {
  const officeIds = ["1", "2", "3"];
  return (
    <div className="w-[85%]">
      {officeIds.map((officeId) => (
        <StakeholderCard
          key={officeId}
          investigationId={investigationId}
          officeId={officeId}
        />
      ))}
    </div>
  );
};

export default StakeholderList;
