import React from "react";
import StakeholderCard from "./StakeholderCard";

type StakeholderListProps = {
  stakeholders: any;
};

const StakeholderList = ({ stakeholders }: StakeholderListProps) => {
  return (
    <div className="w-[100%]">
      {stakeholders.length == 0 && (
        <div className="mx-2 my-2 flex w-full items-center justify-start space-x-10 rounded-md border-2 border-gray-400 px-2 py-2">
          <span>No stakeholders</span>
        </div>
      )}
      {stakeholders.map((stakeholderOffice: any, index: number) => (
        <StakeholderCard key={index + 1} stakeholder={stakeholderOffice} />
      ))}
    </div>
  );
};

export default StakeholderList;
