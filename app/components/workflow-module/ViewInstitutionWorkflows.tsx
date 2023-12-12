"use client"
import React, { useState } from "react";

import dumbyData from "../../../tests/dumbyData.json";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Modal from "../Modal";

const ViewInstitutionWorkflows = ({ institution }: any) => {
  const institutionWorkflows = dumbyData.institutionWorkflows;
  const [selectedWorkflow, setSelectedWorkflow] = useState<any>(null)

  return (
    <div className="border-2 rounded-lg w-5/6 m-auto mt-10 p-3">
      <div className="font-bold text-2xl">Institutional Wsorkflows</div>
      <div className="flex flex-wrap">
        {institutionWorkflows.map((workflow) => (
          <div className="text-left w-1/3 py-2 pl-2">
            <button onClick={() => setSelectedWorkflow(workflow)} className="w-full hover:bg-gray-700 hover:text-white hover:font-bold p-2 flex justify-between items-center border-2 rounded-lg">
              <div>{workflow.name}</div>
              <div>
                <FaExternalLinkAlt />
              </div>
            </button>
          </div>
        ))}
      </div>
        
        {selectedWorkflow && (
          <Modal onClick={() => setSelectedWorkflow(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white relative text-center pr-24 pl-5 pb-5 rounded-xl"
          >
            <button onClick={() => setSelectedWorkflow(null)} className="bg-red-700 text-white rounded-full p-1 w-fit h-fit absolute top-4 right-4">
              <FaTimes className="text-2xl" />
            </button>

            <div className="font-bold my-5 text-2xl">{selectedWorkflow.name} Workflow</div>
            <div className="">
            {selectedWorkflow?.stages && selectedWorkflow.stages.map((stage: any, index: number) => (
                      <div className="px-2 py-2 text-left rounded-lg flex gap-2 font-medium text-xl">
                        <div>{index+1}</div>
                        <div>{stage.name}</div>
                      </div>
                    ))}
              </div>
          </div>
        </Modal>
        )}

    </div>
  );
};

export default ViewInstitutionWorkflows;
