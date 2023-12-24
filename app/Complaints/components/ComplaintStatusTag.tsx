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
    Processing: <ComplaintStatusButton id={id} onClick={handleClick} />,
    NotAssigned: <ComplaintStatusButton id={id} onClick={handleClick} />,
    Ongoing: <ComplaintStatusButton id={id} onClick={handleClick} />,
    Completed: <ComplaintStatusButton id={id} onClick={handleClick} />,
  }[complaintStatus];
};

const ComplaintStatusButton = ({ id, onClick }: ComplaintStatusButtonProps) => {
  return (
    <button
      className="flex w-40 items-center justify-center rounded-lg border-2 border-red-500 bg-red-500 px-2 py-1 font-bold text-white hover:border-red-400 hover:bg-white hover:text-red-400"
      onClick={onClick}
    >
      Allocate to Institution
    </button>
  );
};

export default ComplaintStatusTag;
