"use client";
import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaTimes, FaTrash } from "react-icons/fa";
import Modal from "./Modal";

interface SetInvestigationWorkflowParamTypes {
  investigationId: number;
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
      institutionWorkflow: selectedWorkflow,
    };

    console.log(body);
  };

  return (
    <Modal onClick={closeForm}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-4/5 rounded-xl bg-white pb-10 text-center"
      >
        <button
          onClick={closeForm}
          className="absolute right-2 top-2 h-fit w-fit rounded-full bg-red-700 p-1 text-white"
        >
          <FaTimes className="text-2xl" />
        </button>
        <div className="mt-5 text-3xl font-black">
          Select Workflow for Investigation
        </div>

        <div className="relative m-auto w-5/6">
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
            <div className="absolute right-0 z-50 flex max-h-[200px] w-[500px] flex-wrap gap-2 overflow-auto rounded-b-lg border-2 bg-white p-2">
              {institutionWorkflows.map((institutionWorkflow) => (
                <button
                  onClick={() => {
                    setSelectedWorkflow(institutionWorkflow);
                    setOpenDropDown(false);
                  }}
                  className="my-1 w-full rounded-lg border-2 px-3 py-2 text-left font-bold hover:bg-gray-700 hover:text-white "
                >
                  {institutionWorkflow.name}
                </button>
              ))}
            </div>
          )}

          <div>
            {selectedWorkflow &&
              selectedWorkflow.stages.map((stage: any, index: number) => (
                <div className="flex gap-2 rounded-lg px-2 py-2 text-left text-xl font-medium">
                  <div>{index + 1}</div>
                  <div>{stage}</div>
                </div>
              ))}
          </div>

          <button className="mt-5 rounded-lg bg-gray-700 px-3 py-1 text-xl font-bold text-white">
            Set Workflow
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SetInvestigationWorkflow;
