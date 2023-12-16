"use client"
import React, { useState } from "react";
import CreateInstitutionWorkflow from "../components/workflow-module/CreateInstitutionWorkflow";
import ViewInstitutionWorkflows from "../components/workflow-module/ViewInstitutionWorkflows";
import ViewInvestigationActions from "../components/investigation-module/ViewInvestigationActions";

const WorkflowPage = () => {
  const sampleInstitution = {
    id: "23425324dsfaf2",
    name: "Wildlife",
  };

  const [openCreateInstitutionWorkflowForm, setOpenCreateInstitutionWorkflowForm] = useState(false)

  return (
    <div>
      <ViewInstitutionWorkflows institution={sampleInstitution} />
      <ViewInvestigationActions />
      <button onClick={() => setOpenCreateInstitutionWorkflowForm(true)} className="px-2 py-1 rounded bg-gray-600 text-white font-bold">Create New Workflow</button>
      {openCreateInstitutionWorkflowForm && (
        <CreateInstitutionWorkflow
        institutionId={sampleInstitution.id}
        institutionName={sampleInstitution.name}
        closeForm={() => setOpenCreateInstitutionWorkflowForm(false)}
      />
      )}
    </div>
  );
};

export default WorkflowPage;
