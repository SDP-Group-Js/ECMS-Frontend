import React, { MouseEventHandler } from "react";

type InvestigationWorkflowStatusTagProps = {
  id: number;
  investigationWorkflow: any;
  onClick: () => void;
};

type InvestigationWorkflowStatusButtonProps = {
  investigationId: number;
  onClick: MouseEventHandler;
};

const InvestigationWorkflowStatusTag = ({
  id,
  investigationWorkflow,
  onClick,
}: InvestigationWorkflowStatusTagProps) => {
  let investigationHasWorkflow: Boolean = false;
  if (investigationWorkflow != null) {
    investigationHasWorkflow = true;
  }

  const handleClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <>
      {investigationHasWorkflow ? (
        <WorkflowAllocatedButton investigationId={id} onClick={handleClick} />
      ) : (
        <WorkflowNotAllocatedButton
          investigationId={id}
          onClick={handleClick}
        />
      )}
    </>
  );
};

const WorkflowNotAllocatedButton = ({
  investigationId,
  onClick,
}: InvestigationWorkflowStatusButtonProps) => {
  return (
    <button
      className="flex w-40 items-center justify-center rounded-lg border-2 border-red-500 bg-red-500 px-2 py-1 font-bold text-white hover:border-red-400 hover:bg-white hover:text-red-400"
      onClick={onClick}
    >
      No Workflow
    </button>
  );
};

const WorkflowAllocatedButton = ({
  investigationId,
  onClick,
}: InvestigationWorkflowStatusButtonProps) => {
  return (
    <button
      className="flex w-40 items-center justify-center rounded-lg border-2 border-green-500 bg-green-500 px-2 py-1 font-bold text-white hover:border-green-400 hover:bg-white hover:text-green-400"
      onClick={onClick}
    >
      Provided
    </button>
  );
};

export default InvestigationWorkflowStatusTag;
