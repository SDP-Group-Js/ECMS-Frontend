import React from "react";

type InvestigationStatusTagProps = {
  investigationId: number;
  investigationStatus: string;
  onClick: () => void;
};

type InvestigationStatusButtonProps = {
  investigationId: number;
  onClick: () => void;
};

const InvestigationStatusTag = ({
  investigationId,
  investigationStatus,
  onClick,
}: InvestigationStatusTagProps) => {
  return {
    NotAssigned: (
      <InvestigationNotAllocatedButton
        investigationId={investigationId}
        onClick={onClick}
      />
    ),
    Ongoing: (
      <InvestigationOngoingButton
        investigationId={investigationId}
        onClick={onClick}
      />
    ),
    Completed: (
      <InvestigationCompletedButton
        investigationId={investigationId}
        onClick={onClick}
      />
    ),
    "Allocated To Division": (
      <InvestigationAllocatedToDivisionButton
        investigationId={investigationId}
        onClick={onClick}
      />
    ),
    "Allocated To Branch": (
      <InvestigationAllocatedToBranchButton
        investigationId={investigationId}
        onClick={onClick}
      />
    ),
    "Allocated To Office": (
      <InvestigationAllocatedToOfficeButton
        investigationId={investigationId}
        onClick={onClick}
      />
    ),
    "Involved Parties Added": (
      <InvestigationInvolvedPartiesAddedButton
        investigationId={investigationId}
        onClick={onClick}
      />
    ),
  }[investigationStatus];
};

const InvestigationNotAllocatedButton = ({
  investigationId,
  onClick,
}: InvestigationStatusButtonProps) => {
  return (
    <button
      className="flex w-40 items-center justify-center rounded-lg border-2 border-red-500 bg-red-500 px-2 py-1 font-bold text-white hover:border-red-400 hover:bg-white hover:text-red-400"
      onClick={onClick}
    >
      Not Allocated
    </button>
  );
};

const InvestigationOngoingButton = ({
  investigationId,
  onClick,
}: InvestigationStatusButtonProps) => {
  return (
    <button
      className="flex w-40 items-center justify-center rounded-lg border-2 border-yellow-500 bg-yellow-500 px-2 py-1 font-bold text-white hover:border-yellow-400 hover:bg-white hover:text-yellow-400"
      onClick={onClick}
    >
      Ongoing
    </button>
  );
};

const InvestigationAllocatedToDivisionButton = ({
  investigationId,
  onClick,
}: InvestigationStatusButtonProps) => {
  return (
    <button
      className="flex w-60 items-center justify-center rounded-lg border-2 border-yellow-500 bg-yellow-500 px-2 py-1 font-bold text-white hover:border-yellow-400 hover:bg-white hover:text-yellow-400"
      onClick={onClick}
    >
      Allocated To Division
    </button>
  );
};

const InvestigationAllocatedToBranchButton = ({
  investigationId,
  onClick,
}: InvestigationStatusButtonProps) => {
  return (
    <button
      className="flex w-60 items-center justify-center rounded-lg border-2 border-yellow-500 bg-yellow-500 px-2 py-1 font-bold text-white hover:border-yellow-400 hover:bg-white hover:text-yellow-400"
      onClick={onClick}
    >
      Allocated To Branch
    </button>
  );
};

const InvestigationAllocatedToOfficeButton = ({
  investigationId,
  onClick,
}: InvestigationStatusButtonProps) => {
  return (
    <button
      className="flex w-60 items-center justify-center rounded-lg border-2 border-yellow-500 bg-yellow-500 px-2 py-1 font-bold text-white hover:border-yellow-400 hover:bg-white hover:text-yellow-400"
      onClick={onClick}
    >
      Allocated To Office
    </button>
  );
};

const InvestigationInvolvedPartiesAddedButton = ({
  investigationId,
  onClick,
}: InvestigationStatusButtonProps) => {
  return (
    <button
      className="flex w-60 items-center justify-center rounded-lg border-2 border-green-500 bg-green-500 px-2 py-1 font-bold text-white hover:border-green-400 hover:bg-white hover:text-green-400"
      onClick={onClick}
    >
      Stakeholders Added
    </button>
  );
};

const InvestigationCompletedButton = ({
  investigationId,
  onClick,
}: InvestigationStatusButtonProps) => {
  return (
    <button
      className="flex w-40 items-center justify-center rounded-lg border-2 border-blue-500 bg-blue-500 px-2 py-1 font-bold text-white hover:border-blue-400 hover:bg-white hover:text-blue-400"
      onClick={onClick}
    >
      Complete
    </button>
  );
};

export default InvestigationStatusTag;
