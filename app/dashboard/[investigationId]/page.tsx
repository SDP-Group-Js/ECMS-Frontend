"use client";

import React, { useState } from "react";
import SetInvestigationWorkflow from "../components/workflow/SetInvestigationWorkflow";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
import InvestigationStatusTag from "../components/investigation/InvestigationStatusTag";
import ViewRelationButton from "../components/investigation/ViewRelationButton";
import StakeholderList from "../components/investigation/StakeholderList";
import ViewInvestigationActions from "../components/investigation/ViewInvestigationActions";
import { useAuth } from "@/context/auth";
import InvestigationWorkflowStatusTag from "../components/investigation/InvestigationWorkflowStatusTag";
import AllocateInvestigationModal from "../components/investigation/AllocateInvestigationModal";
import "@/components/shared/HeaderStyles.css";
import ViewComplaintModal from "../components/complaints/ViewComplaintModal";

interface params {
  params: { investigationId: number };
}

enum OfficeType {
  Institution = "Institution",
  Division = "Division",
  Branch = "Branch",
  BeatOffice = "Beat Office",
}

export default function InvestigationPage({ params }: params) {
  const investigationId = params.investigationId;
  const [isWorkflowFormOpen, setIsWorkflowFormOpen] = useState(false);
  const [isInvestigationStatusFormOpen, setIsInvestigationStatusFormOpen] =
    useState(false);
  const [isComplaintFormOpen, setIsComplaintFormOpen] = useState(false);

  const { user } = useAuth() as any;

  const userOffice = user.details.office;
  let officeType: OfficeType = OfficeType.BeatOffice;
  let childOffices: any = [];
  if (userOffice.Institution != null) {
    officeType = OfficeType.Institution;
    childOffices = userOffice.Institution.divisions;
  } else if (userOffice.Division != null) {
    officeType = OfficeType.Division;
    childOffices = userOffice.Institution.branches;
  } else if (userOffice.Branch != null) {
    officeType = OfficeType.Branch;
    childOffices = userOffice.Institution.offices;
  }

  const assignedInvestigations = userOffice.assignedInvestigations;
  const workflows = userOffice.workflows;

  const investigation = assignedInvestigations.find(
    (investigation: any) => investigation.id == investigationId,
  );
  const investigationWorkflow = investigation.workflow;
  let investigationHasWorkflow = false;
  if (investigationWorkflow != null) {
    investigationHasWorkflow = true;
  }

  let isAdmin = false;
  if (
    user.details.userRole == "SystemAdmin" ||
    user.details.userRole == "OfficeAdmin"
  ) {
    isAdmin = true;
  }

  return (
    <>
      <div className="flex h-full w-screen flex-row overflow-visible bg-slate-50">
        {isAdmin && <Sidebar user={user.details} />}
        <div className="flex-1">
          <Header officeType={officeType} office={userOffice} />
          <div className="mx-14 my-10 rounded-md border-2 border-gray-400 px-10 py-10">
            <div className="flex w-full text-xl font-bold text-black">
              Investigation #{investigation.id}
              <span>{investigation.id}</span>
            </div>
            <div className="mt-10 text-lg">
              <div className="flex items-center justify-start space-x-5">
                <label className="w-40">Status: </label>
                <InvestigationStatusTag
                  id={investigation.id}
                  investigationStatus={investigation.status}
                  onClick={() => {
                    setIsInvestigationStatusFormOpen(true);
                  }}
                />
                <InvestigationWorkflowStatusTag
                  id={investigation.id}
                  investigationWorkflow={investigationWorkflow}
                  onClick={() => {
                    setIsWorkflowFormOpen(true);
                  }}
                />
              </div>
            </div>
            <div></div>
            {isWorkflowFormOpen && !investigationHasWorkflow && (
              <SetInvestigationWorkflow
                investigationId={2}
                closeForm={() => setIsWorkflowFormOpen(false)}
                institutionWorkflows={workflows}
              />
            )}
            <div className="mt-8 text-lg">
              <div className="flex items-center justify-start space-x-5">
                <label className="w-40">Description: </label>
                <textarea
                  className="h-30 w-[90%] rounded-md border-2 border-gray-400 px-2 py-2"
                  readOnly
                >
                  {investigation.description}
                </textarea>
              </div>
            </div>
            <div className="mt-8 text-lg">
              <div className="flex items-center justify-start space-x-5">
                <label className="w-40">Complaint: </label>
                <ViewRelationButton
                  relationId={investigation.complaint.id}
                  textToDisplay="View Complaint"
                  onClick={() => {
                    setIsComplaintFormOpen(true);
                  }}
                />
              </div>
              <div className="mt-8 text-lg">
                <div className="flex items-center justify-start space-x-5">
                  <label className="w-40">Assigned Office: </label>
                  <div>{userOffice.name + " : " + officeType}</div>
                </div>
              </div>
              <div className="mt-8 text-lg">
                <div className="flex items-start justify-start space-x-5">
                  <label className="mt-2 w-40">Stakeholders: </label>
                  <StakeholderList
                    stakeholders={investigation.involvedParties}
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="mt-6 text-lg">Progress: </span>
            </div>
            <ViewInvestigationActions
              investigationStages={investigation.investigationStages}
            />
          </div>
        </div>
      </div>
      {isInvestigationStatusFormOpen &&
        investigation.status == "NotAssigned" && (
          <AllocateInvestigationModal
            isVisible={isInvestigationStatusFormOpen}
            investigationId={investigationId}
            childOffices={childOffices}
            handleCloseButtonClick={() => {
              setIsInvestigationStatusFormOpen(false);
            }}
          />
        )}
      {isInvestigationStatusFormOpen && investigation.status == "Ongoing" && (
        <AllocateInvestigationModal
          isVisible={isInvestigationStatusFormOpen}
          investigationId={investigationId}
          childOffices={childOffices}
          handleCloseButtonClick={() => {
            setIsInvestigationStatusFormOpen(false);
          }}
        />
      )}
      <ViewComplaintModal
        isVisible={isComplaintFormOpen}
        complaintId={investigation.complaint.id}
        complaintTitle={investigation.complaint.complaint_title}
        complaintDescription={investigation.complaint.complaint_description}
        complainer={investigation.complaint.complainer}
        investigation={investigation}
        handleCloseButtonClick={() => setIsComplaintFormOpen(false)}
      />
    </>
  );
}
