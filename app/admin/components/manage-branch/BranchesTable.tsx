import React from "react";
import BranchCard from "./BranchCard";

type props = {
  branches: any;
};

const OfficesTable = ({ branches }: props) => {
  return (
    <div>
      {branches.map((branch: any) => {
        return (
          <BranchCard
            branchId={branch.id}
            branchName={branch.name}
            branchType="Branch"
            branchDescription={branch.description}
          />
        );
      })}
    </div>
  );
};

export default OfficesTable;
