"use client";
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { FaAngleDown, FaAngleUp, FaTimes, FaTrash } from "react-icons/fa";
import Modal from "./Modal";

interface SetInvestigationWorkflowParamTypes {
  investigationId: string;
  institutionWorkflows: any[];
  closeForm: any;
}

const SetInvestigationWorkflow = ({
  investigationId,
  institutionWorkflows,
  closeForm,
}: SetInvestigationWorkflowParamTypes) => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<any>();
  const [openDropDown, setOpenDropDown] = useState(false);
  const [stages, setStages] = useState<string[]>([]);

  const createWorkflow = () => {
    const body = {
      investigationId: investigationId,
      institutionWorkflow: selectedWorkflow
    };

    console.log(body);
  };

  return (
    <Modal onClick={closeForm}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-4/5 rounded-xl bg-white pb-10 text-center"
      >
        <button onClick={closeForm} className="absolute right-2 top-2 h-fit w-fit rounded-full bg-red-700 p-1 text-white">
          <FaTimes className="text-2xl" />
        </button>
        <div className="mt-5 text-3xl font-black">
          Select Workflow for Investigation
        </div>

        <div className="relative w-5/6 m-auto">
          <div className="flex items-center rounded border-2 px-3 py-2 text-left">
          <div className="flex-grow select-none text-lg font-bold">
            {selectedWorkflow ? (
              <>
                <div>{selectedWorkflow?.name}</div>
                <div></div>
              </>
            ) : (
              <div>Select a Workflow</div>
            )}
          </div>

          <button
            onClick={() => setOpenDropDown(!openDropDown)}
            className="rounded-lg p-1 text-3xl hover:bg-gray-700 hover:text-white"
          >
            {openDropDown ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>

        {openDropDown && (
          <div className="max-h-[200px] w-[500px] p-2 rounded-b-lg flex gap-2 flex-wrap right-0 absolute bg-white z-50 overflow-auto border-2">
            {institutionWorkflows.map((institutionWorkflow) => (
              <button
                onClick={() => {setSelectedWorkflow(institutionWorkflow); setOpenDropDown(false)}}
                className="my-1 w-full font-bold rounded-lg border-2 px-3 py-2 text-left hover:bg-gray-700 hover:text-white "
              >
                {institutionWorkflow.name}
              </button>
            ))}
          </div>
        )}

        <div >
        {selectedWorkflow && selectedWorkflow.stages.map((stage: { name: string }, index: number) => (
          <div className='px-2 py-2 text-left rounded-lg flex gap-2 font-medium text-xl'>
          <div>{index + 1}</div>
          <div>{stage.name}</div>
        </div>
        ))}
        </div>

        <button className="bg-gray-700 mt-5 text-white rounded-lg px-3 py-1 font-bold text-xl">Set Workflow</button>
        </div>
      </div>
    </Modal>
  );
};

export default SetInvestigationWorkflow;
