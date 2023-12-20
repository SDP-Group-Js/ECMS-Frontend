"use client";
import React, { useState } from "react";

import dumbyData from "../../../../tests/dumbyData.json";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Modal from "./Modal";
import CreateInstitutionWorkflow from "./CreateInstitutionWorkflow";

const ViewWorkflows = ({ office }: any) => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<any>(null);
  const [openWorkflowForm, setOpenWorkflowForm] = useState(false);

  return (
    <div className="m-auto mt-10 w-5/6 rounded-lg border-2 p-3">
      <div className="text-2xl font-bold">Institutional Workflows</div>
      <button
        onClick={() => setOpenWorkflowForm(true)}
        className="rounded bg-gray-600 px-2 py-1 font-bold text-white"
      >
        Create New Workflow
      </button>
      {openWorkflowForm && (
        <CreateInstitutionWorkflow
          officeId={office.id}
          officeName={office.name}
          closeForm={() => setOpenWorkflowForm(false)}
        />
      )}
      <div className="flex flex-wrap">
        {office.workflows.map((workflow: any) => (
          <div className="w-1/3 py-2 pl-2 text-left">
            <button
              onClick={() => setSelectedWorkflow(workflow)}
              className="flex w-full items-center justify-between rounded-lg border-2 p-2 hover:bg-gray-700 hover:font-bold hover:text-white"
            >
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
            className="relative rounded-xl bg-white pb-5 pl-5 pr-24 text-center"
          >
            <button
              onClick={() => setSelectedWorkflow(null)}
              className="absolute right-4 top-4 h-fit w-fit rounded-full bg-red-700 p-1 text-white"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="my-5 text-2xl font-bold">
              {selectedWorkflow.name} Workflow
            </div>
            <div className="">
              {selectedWorkflow?.stages &&
                selectedWorkflow.stages.map((stage: any, index: number) => (
                  <div className="flex gap-2 rounded-lg px-2 py-2 text-left text-xl font-medium">
                    <div>{index + 1}</div>
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

export default ViewWorkflows;
