"use client";

import React, { useState } from "react";
import SetInvestigationWorkflow from "../components/workflow/SetInvestigationWorkflow";
import dumbyData from "../../../tests/dumbyData.json";
import Sidebar from "@/components/shared/Sidebarn";
import Header from "@/components/shared/Header";
import InvestigationStatusTag from "../components/investigation/InvestigationStatusTag";
import ViewRelationButton from "../components/investigation/ViewRelationButton";
import StakeholderList from "../components/investigation/StakeholderList";
import ViewInvestigationActions from "../components/investigation/ViewInvestigationActions";

interface params {
  params: { id: number };
}

export default function InvestigationPage({ params }: params) {
  const investigationId = params.id;
  const [isWorkflowFormOpen, setIsWorkflowFormOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen flex-row overflow-visible bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="mx-14 my-10 rounded-md border-2 border-gray-400 px-10 py-10">
          <div className="flex w-full text-xl font-bold text-black">
            Investigation #<span>{investigationId}</span>
          </div>
          <div className="mt-10 text-lg">
            <div className="flex items-center justify-start space-x-5">
              <label className="w-40">Status: </label>
              <InvestigationStatusTag
                investigationId={investigationId}
                investigationStatus="NotAssigned"
                onClick={() => {}}
              />
            </div>
          </div>
          <button
            onClick={() => true}
            className="rounded bg-gray-600 px-2 py-1 font-bold text-white"
          >
            Set Investigation Workflow
          </button>
          {isWorkflowFormOpen && (
            <SetInvestigationWorkflow
              investigationId="3290w9dfsi"
              closeForm={() => setIsWorkflowFormOpen(false)}
              institutionWorkflows={dumbyData.institutionWorkflows}
            />
          )}
          <div className="mt-8 text-lg">
            <div className="flex items-center justify-start space-x-5">
              <label className="w-40">Description: </label>
              <textarea className="h-30 w-[90%] rounded-md border-2 border-gray-400 px-2 py-2">
                [Description]
              </textarea>
            </div>
          </div>
          <div className="mt-8 text-lg">
            <div className="flex items-center justify-start space-x-5">
              <label className="w-40">Complaint: </label>
              <ViewRelationButton
                relationId={2}
                textToDisplay="View Complaint"
                onClick={() => {}}
              />
            </div>
            <div className="mt-8 text-lg">
              <div className="flex items-center justify-start space-x-5">
                <label className="w-40">Assigned Office: </label>
                <ViewRelationButton
                  relationId="hhav-eaveb-eaeqe-eertt"
                  textToDisplay="View Office"
                  onClick={() => {}}
                />
              </div>
            </div>
            <div className="mt-8 text-lg">
              <div className="flex items-center justify-start space-x-5">
                <label className="w-40">Workflow: </label>
                <ViewRelationButton
                  relationId="77fryd-jhaye-jrghsu-5ii6"
                  textToDisplay="View Workflow"
                  onClick={() => {}}
                />
              </div>
            </div>
            <div className="mt-8 text-lg">
              <div className="flex items-start justify-start space-x-5">
                <label className="mt-2 w-40">Stakeholders: </label>
                <StakeholderList investigationId={investigationId} />
              </div>
            </div>
          </div>

          <ViewInvestigationActions />
        </div>
      </div>
    </div>
  );
}
