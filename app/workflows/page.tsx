"use client";
import React, { useState } from "react";
import CreateInstitutionWorkflow from "../components/workflow/CreateInstitutionWorkflow";
import ViewInstitutionWorkflows from "../components/workflow/ViewInstitutionWorkflows";
import ViewInvestigationActions from "../components/investigation/ViewInvestigationActions";
import SetInvestigationWorkflow from "../components/workflow/SetInvestigationWorkflow";
import dumbyData from "../../tests/dumbyData.json";

const WorkflowPage = () => {
  const sampleInstitution = {
    id: "23425324dsfaf2",
    name: "Wildlife",
  };

  const [
    openCreateInstitutionWorkflowForm,
    setOpenCreateInstitutionWorkflowForm,
  ] = useState(false);
  const [
    openSetInvestigationWorkflowForm,
    setOpenSetInvestigationWorkflowForm,
  ] = useState(false);

  return (
    <div>
      <ViewInstitutionWorkflows institution={sampleInstitution} />
      <ViewInvestigationActions />
      <button
        onClick={() => setOpenCreateInstitutionWorkflowForm(true)}
        className="rounded bg-gray-600 px-2 py-1 font-bold text-white"
      >
        Create New Workflow
      </button>
      {openCreateInstitutionWorkflowForm && (
        <CreateInstitutionWorkflow
          institutionId={sampleInstitution.id}
          institutionName={sampleInstitution.name}
          closeForm={() => setOpenCreateInstitutionWorkflowForm(false)}
        />
      )}
      <button
        onClick={() => setOpenSetInvestigationWorkflowForm(true)}
        className="rounded bg-gray-600 px-2 py-1 font-bold text-white"
      >
        Set Investigation Workflow
      </button>
      {openSetInvestigationWorkflowForm && (
        <SetInvestigationWorkflow
          investigationId="3290w9dfsi"
          closeForm={() => setOpenSetInvestigationWorkflowForm(false)}
          institutionWorkflows={dumbyData.institutionWorkflows}
        />
      )}
    </div>
  );
};

export default WorkflowPage;
