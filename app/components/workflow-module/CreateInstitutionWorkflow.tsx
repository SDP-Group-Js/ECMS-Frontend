"use client";
import { useState } from "react";
import Modal from "../institution-module/InstModal";
import { FaTimes, FaTrash } from "react-icons/fa";

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
  const [newStageName, setNewStageName] = useState("");

  const addStage = () => {
    if (newStageName.length > 0) {
      setStages((stages) => [...stages, newStageName]);
      setNewStageName("");
    }
  };

  const removeStage = (index: number) => {
    setStages(stages.filter((_, i) => i !== index));
  };

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
          <div className='flex w-full mt-5 justify-center items-center'>
            <input
              value={newStageName}
              onChange={(e) => setNewStageName(e.target.value)}
              placeholder='Stage Name'
              id='stageName'
              className='text-xl w-3/4 h-10 px-2 rounded-tl-lg border-2 border-gray-700'
            />
            <button
              disabled={newStageName.length == 0}
              onClick={addStage}
              className='bg-gray-700 w-1/4 text-white h-10 font-bold py-1 text-xl rounded-tr-lg'
            >
              Add Stage
            </button>
          </div>
          <div className='border-2 border-gray-700 border-t-0 pb-2 rounded-b-lg'>
            <div className='overflow-auto w-full h-[300px]'>
              {stages &&
                stages.map((stage, index) => (
                  <Stage id={index} name={stage} removeStage={removeStage} />
                ))}
            </div>
          </div>

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

const Stage = ({ id, name, removeStage }: any) => {
  return (
    <div key={id} className='flex gap-2 w-full px-3 py-2 border-2'>
      <div>{id + 1}</div>
      <div>{name}</div>
      <div className='flex-grow' />
      <div>
        <button
          onClick={() => removeStage(id)}
          className='rounded bg-red-700 text-white p-2'
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CreateInstitutionWorkflow;
