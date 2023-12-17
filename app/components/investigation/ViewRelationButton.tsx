import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type ViewRelationButtonProps = {
  relationId: number | string;
  textToDisplay: string;
  onClick: () => void;
};

const ViewRelationButton = ({
  relationId,
  textToDisplay,
  onClick,
}: ViewRelationButtonProps) => {
  return (
    <>
      <button
        className="flex w-60 items-center justify-center space-x-3 rounded-lg border-2 border-gray-700 bg-gray-700 px-2 py-1 font-bold text-white hover:border-gray-500 hover:bg-white hover:text-gray-500"
        onClick={onClick}
      >
        <span>{textToDisplay}</span>
        {typeof relationId === "number" ? <span>#{relationId}</span> : null}
        <span className="ml-4">
          <FaExternalLinkAlt />
        </span>
      </button>
    </>
  );
};

export default ViewRelationButton;
