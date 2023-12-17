"use client";

import React from "react";
import Sidebar from "@/app/components/shared/Sidebar";
import Header from "@/app/components/shared/Header";
import "@/app/components/shared/HeaderStyles.css";
import DashboardContentPanel from "@/app/components/shared/DashboardContentPanel";
import InvestigationStatusTag from "@/app/components/investigation/InvestigationStatusTag";
import ViewRelationButton from "@/app/components/investigation/ViewRelationButton";
import StakeholderCard from "@/app/components/investigation/StakeholderCard";
import StakeholderList from "@/app/components/investigation/StakeholderList";

interface params {
  params: { id: number };
}

export default function Home({ params }: params) {
  const investigationId = params.id;

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
        </div>
      </div>
    </div>
  );
}
