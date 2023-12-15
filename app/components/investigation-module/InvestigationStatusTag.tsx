import React from "react";

type InvestigationStatusTagProps = {
  status: string;
};

const InvestigationStatusTag = ({ status }: InvestigationStatusTagProps) => {
  let classNames = "";
  if (status === "Not Allocated") {
    classNames = "bg-yellow-300 text-white rounded-lg px-2 py-1";
  } else if (status === "Allocated") {
    classNames = "bg-green-500 text-white rounded-lg px-2 py-1";
  }
  return <div className={classNames}>{status}</div>;
};

export default InvestigationStatusTag;
