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
        className='bg-white relative text-center px-20 h-[600px] rounded-xl'
      >
        <button className='bg-red-700 text-white rounded-full p-1 w-fit h-fit absolute top-2 right-2'>
          <FaTimes className='text-2xl' />
        </button>
        <div className='text-3xl font-black mt-5'>
          Create new workflow for {institutionName}
        </div>
        <div className='mt-10 w-[600px] m-auto'>
          <div className=''>
            <div className='w-full text-left font-bold'>Workflow Name</div>
            <input
              value={workflowName}
              onChange={(e) => setWorkflowName(e.target.value)}
              id='stageName'
              className='text-xl w-full h-10 px-2 rounded-lg border-2 border-gray-700'
            />
          </div>

          <SetStages stages={stages} setStages={setStages} />
          

          <button
            onClick={createWorkflow}
            className='px-2 py-1 rounded-lg bg-gray-700 font-bold text-xl text-white mt-5'
          >
            Create Workflow
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateInstitutionWorkflow;
