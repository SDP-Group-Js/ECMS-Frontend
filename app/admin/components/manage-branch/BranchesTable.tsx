import React from "react";
import BranchCard from "./BranchCard";

type props = {
  branches: any;
};

const OfficesTable = ({ branches }: props) => {
  return (
    <div>
      {branches.map((branch: any, index: number) => {
        return (
          <BranchCard
            key={index}
            branchId={branch.id}
            branchName={branch.name}
            branchType="Branch"
            branchDescription={branch.description}
            branchParentDivisionName={branch.Branch.Division.office.name}
          />
        );
      })}
    </div>
  );
};

export default OfficesTable;
