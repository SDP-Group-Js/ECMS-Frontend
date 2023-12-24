import React, { MouseEventHandler } from "react";

type ComplaintStatusTagProps = {
  id: number;
  complaintStatus: string;
  onClick: () => void;
};

type ComplaintStatusButtonProps = {
  id: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const ComplaintStatusTag = ({
  id,
  complaintStatus,
  onClick,
}: ComplaintStatusTagProps) => {
  // Handle the click event here and prevent propagation
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onClick();
  };

  return {
    Processing: <ComplaintProcessingButton id={id} onClick={handleClick} />,
    NotAssigned: <ComplaintNotAllocatedButton id={id} onClick={handleClick} />,
    Ongoing: <ComplaintOngoingButton id={id} onClick={handleClick} />,
    Completed: <ComplaintCompleteButton id={id} onClick={handleClick} />,
  }[complaintStatus];
};

const ComplaintProcessingButton = ({
  id,
  onClick,
}: ComplaintStatusButtonProps) => {
  return (
    <button
      className="flex w-40 items-center justify-center rounded-lg border-2 border-gray-500 bg-gray-500 px-2 py-1 font-bold text-white hover:border-gray-400 hover:bg-white hover:text-gray-400"
      onClick={onClick}
    >
      Pending Investigation
    </button>
  );
};

const ComplaintNotAllocatedButton = ({
  id,
  onClick,
}: ComplaintStatusButtonProps) => {
  return (
    <button
      className="flex w-40 items-center justify-center rounded-lg border-2 border-red-500 bg-red-500 px-2 py-1 font-bold text-white hover:border-red-400 hover:bg-white hover:text-red-400"
      onClick={onClick}
    >
      Investigation Not Allocated
    </button>
  );
};

const ComplaintOngoingButton = ({
  id,
  onClick,
}: ComplaintStatusButtonProps) => {
  return (
    <button
      className="flex w-40 items-center justify-center rounded-lg border-2 border-yellow-500 bg-yellow-500 px-2 py-1 font-bold text-white hover:border-yellow-400 hover:bg-white hover:text-yellow-400"
      onClick={onClick}
    >
      Investigation Ongoing
    </button>
  );
};

const ComplaintCompleteButton = ({
  id,
  onClick,
}: ComplaintStatusButtonProps) => {
  return (
    <button
      className="flex w-40 items-center justify-center rounded-lg border-2 border-green-500 bg-green-500 px-2 py-1 font-bold text-white hover:border-green-400 hover:bg-white hover:text-green-400"
      onClick={onClick}
    >
      Complete
    </button>
  );
};

export default ComplaintStatusTag;
