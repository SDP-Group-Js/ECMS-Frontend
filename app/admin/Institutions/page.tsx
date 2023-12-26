"use client";

import React from "react";
import InstmHeader from "@/app/admin/components/institution-module/institution-man/InstmHeader";
import Sidebar from "@/components/shared/Sidebar";
import ManInst from "../components/institution-module/institution-man/Manage-Institutions";
import ManDiv from "../components/manage-division/Manage-Division";
import ManBranch from "../components/manage-branch/Manage-Branch";
import ManOffices from "../components/manage-offices/Manage-Office";
import { auth } from "@/config/firebase";
import { useAuth } from "@/context/adminAuth";
import "@/components/shared/HeaderStyles.css";

enum OfficeType {
  Institution = "Institution",
  Division = "Division",
  Branch = "Branch",
  BeatOffice = "Beat Office",
}

export default function Home() {
  const { user, institutions, divisions, branches, beatOffices } =
    useAuth() as any;

  const userOffice = user.details.office;
  let superInstitutionName: string = "";
  let officeType: OfficeType = OfficeType.BeatOffice;
  let childOffices: any = [];
  if (userOffice.Institution != null) {
    superInstitutionName = userOffice.name;
    officeType = OfficeType.Institution;
    childOffices = userOffice.Institution.divisions;
  } else if (userOffice.Division != null) {
    superInstitutionName = userOffice.Division.Institution.office.name;
    officeType = OfficeType.Division;
    childOffices = userOffice.Institution.branches;
  } else if (userOffice.Branch != null) {
    superInstitutionName = userOffice.Branch.Division.Institution.office.name;
    officeType = OfficeType.Branch;
    childOffices = userOffice.Institution.offices;
  } else if (userOffice.BeatOffice != null) {
    superInstitutionName =
      userOffice.BeatOffice.Branch.Division.Institution.office.name;
  }

  let assignedInvestigations = [];
  if (userOffice.assignedInvestigations != null) {
    assignedInvestigations = userOffice.assignedInvestigations;
  }

  let involvedInvestigations = [];
  if (userOffice.involvedInvestigations != null) {
    involvedInvestigations = userOffice.involvedInvestigations;
  }

  let isAdmin = false;
  if (
    user.details.userRole == "SystemAdmin" ||
    user.details.userRole == "OfficeAdmin"
  ) {
    isAdmin = true;
  }
  return (
    <div className="flex h-full w-full flex-row overflow-x-visible overflow-y-visible">
      <Sidebar user={user.details} />
      <div className="flex-1">
        <InstmHeader />
        <div className="p-4">
          <ManInst institutions={institutions} />
          <ManDiv divisions={divisions} />
          <ManBranch branches={branches} />
          <ManOffices beatOffices={beatOffices} />
        </div>
      </div>
    </div>
  );
}
//changeee
