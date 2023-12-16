import React from "react";

type InvestigationStatusTagProps = {
  investigationId: number;
  investigationStatus: string;
};

type InvestigationStatusButtonProps = {
  investigationId: number;
};

const InvestigationStatusTag = ({
  investigationId,
  investigationStatus,
}: InvestigationStatusTagProps) => {
  return {
    NotAssigned: (
      <InvestigationNotAllocatedButton investigationId={investigationId} />
    ),
    Ongoing: <InvestigationOngoingButton investigationId={investigationId} />,
    Completed: (
      <InvestigationCompletedButton investigationId={investigationId} />
    ),
    "Allocated To Division": (
      <InvestigationAllocatedToDivisionButton
        investigationId={investigationId}
      />
    ),
    "Allocated To Branch": (
      <InvestigationAllocatedToBranchButton investigationId={investigationId} />
    ),
    "Allocated To Office": (
      <InvestigationAllocatedToOfficeButton investigationId={investigationId} />
    ),
    "Involved Parties Added": (
      <InvestigationInvolvedPartiesAddedButton
        investigationId={investigationId}
      />
    ),
  }[investigationStatus];
};

const InvestigationNotAllocatedButton = ({
  investigationId,
}: InvestigationStatusButtonProps) => {
  return (
    <button className="flex w-40 items-center justify-center rounded-lg border-2 border-red-500 bg-red-500 px-2 py-1 font-bold text-white hover:border-red-400 hover:bg-white hover:text-red-400">
      Not Allocated
    </button>
  );
};

const InvestigationOngoingButton = ({
  investigationId,
}: InvestigationStatusButtonProps) => {
  return (
    <button className="flex w-40 items-center justify-center rounded-lg border-2 border-yellow-500 bg-yellow-500 px-2 py-1 font-bold text-white hover:border-yellow-400 hover:bg-white hover:text-yellow-400">
      Ongoing
    </button>
  );
};

const InvestigationAllocatedToDivisionButton = ({
  investigationId,
}: InvestigationStatusButtonProps) => {
  return (
    <button className="flex w-60 items-center justify-center rounded-lg border-2 border-yellow-500 bg-yellow-500 px-2 py-1 font-bold text-white hover:border-yellow-400 hover:bg-white hover:text-yellow-400">
      Allocated To Division
    </button>
  );
};

const InvestigationAllocatedToBranchButton = ({
  investigationId,
}: InvestigationStatusButtonProps) => {
  return (
    <button className="flex w-60 items-center justify-center rounded-lg border-2 border-yellow-500 bg-yellow-500 px-2 py-1 font-bold text-white hover:border-yellow-400 hover:bg-white hover:text-yellow-400">
      Allocated To Branch
    </button>
  );
};

const InvestigationAllocatedToOfficeButton = ({
  investigationId,
}: InvestigationStatusButtonProps) => {
  return (
    <button className="flex w-60 items-center justify-center rounded-lg border-2 border-yellow-500 bg-yellow-500 px-2 py-1 font-bold text-white hover:border-yellow-400 hover:bg-white hover:text-yellow-400">
      Allocated To Office
    </button>
  );
};

const InvestigationInvolvedPartiesAddedButton = ({
  investigationId,
}: InvestigationStatusButtonProps) => {
  return (
    <button className="flex w-60 items-center justify-center rounded-lg border-2 border-green-500 bg-green-500 px-2 py-1 font-bold text-white hover:border-green-400 hover:bg-white hover:text-green-400">
      Stakeholders Added
    </button>
  );
};

const InvestigationCompletedButton = ({
  investigationId,
}: InvestigationStatusButtonProps) => {
  return (
    <button className="flex w-40 items-center justify-center rounded-lg border-2 border-blue-500 bg-blue-500 px-2 py-1 font-bold text-white hover:border-blue-400 hover:bg-white hover:text-blue-400">
      Complete
    </button>
  );
};

export default InvestigationStatusTag;
