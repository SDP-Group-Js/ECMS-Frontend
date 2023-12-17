"use client";
import { useState } from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import SetStages from "./SetStages";
import Modal from "../Modal";

interface CreateInstitutionWorkflowParamTypes {
  institutionId: string;
  institutionName: string;
  closeForm: any;
}

const CreateInstitutionWorkflow = ({
  institutionId,
  institutionName,
  closeForm,
}: CreateInstitutionWorkflowParamTypes) => {
  const [stages, setStages] = useState<string[]>([]);
  const [workflowName, setWorkflowName] = useState("");

  const createWorkflow = () => {
    const body = {
      workflowName: workflowName,
      stages: stages,
      institutionId: institutionId,
    };

    console.log(body);
  };

  return (
    <Modal onClick={closeForm}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[600px] rounded-xl bg-white px-20 text-center"
      >
        <button className="absolute right-2 top-2 h-fit w-fit rounded-full bg-red-700 p-1 text-white">
          <FaTimes className="text-2xl" />
        </button>
        <div className="mt-5 text-3xl font-black">
          Create new workflow for {institutionName}
        </div>
        <div className="m-auto mt-10 w-[600px]">
          <div className="">
            <div className="w-full text-left font-bold">Workflow Name</div>
            <input
              value={workflowName}
              onChange={(e) => setWorkflowName(e.target.value)}
              id="stageName"
              className="h-10 w-full rounded-lg border-2 border-gray-700 px-2 text-xl"
            />
          </div>

          <SetStages stages={stages} setStages={setStages} />

          <button
            onClick={createWorkflow}
            className="mt-5 rounded-lg bg-gray-700 px-2 py-1 text-xl font-bold text-white"
          >
            Create Workflow
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateInstitutionWorkflow;
