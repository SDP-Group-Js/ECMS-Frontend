"use client";

import React, { useState } from "react";
import { auth } from "@/config/firebase";
import { useAuth } from "@/context/auth";
import { signOut } from "firebase/auth";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
import DashboardContentPanel from "@/components/shared/DashboardContentPanel";
import "@/components/shared/HeaderStyles.css";

enum OfficeType {
  Institution = "Institution",
  Division = "Division",
  Branch = "Branch",
  BeatOffice = "Beat Office",
}

export default function Home() {
  const { user } = useAuth() as any;
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.pathname = "/";
    } catch (error) {
      console.log("Logout error: " + error);
    }
  };

  const userOffice = user.details.office;
  let complaints: any = null;
  let superInstitutionName: string = "";
  let officeType: OfficeType = OfficeType.BeatOffice;
  let childOffices: any = [];
  if (userOffice.Institution != null) {
    complaints = userOffice.Institution.complaints;
    superInstitutionName = userOffice.name;
    officeType = OfficeType.Institution;
    childOffices = userOffice.Institution.divisions;
  } else if (userOffice.Division != null) {
    complaints = userOffice.Division.Institution.complaints;
    superInstitutionName = userOffice.Division.Institution.office.name;
    officeType = OfficeType.Division;
    childOffices = userOffice.Division.branches;
  } else if (userOffice.Branch != null) {
    complaints = userOffice.Branch.Division.Institution.complaints;
    superInstitutionName = userOffice.Branch.Division.Institution.office.name;
    officeType = OfficeType.Branch;
    childOffices = userOffice.Branch.offices;
  } else if (userOffice.BeatOffice != null) {
    complaints = userOffice.BeatOffice.Branch.Division.Institution.complaints;
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
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-slate-50">
      {isAdmin && <Sidebar user={user.details} />}
      <div className="flex-1">
        <Header officeType={officeType} office={userOffice} />
        <div className="px-14 py-10">
          <DashboardContentPanel
            assignedInvestigations={assignedInvestigations}
            involvedInvestigations={involvedInvestigations}
            office={userOffice}
            complaints={complaints}
            institutionName={superInstitutionName}
            childOffices={childOffices}
          />
        </div>
        {!isAdmin && (
          <div className="mt-20 flex items-center justify-center">
            <button
              className="m-2 rounded-full border-2 border-slate-500 bg-slate-500 px-4 py-3 text-xl font-bold text-white hover:bg-white hover:text-slate-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// return (
//   <div className="flex h-screen w-screen flex-row overflow-hidden bg-slate-50">
//     <div className="flex-1">
//       <div>Main Dashboard</div>
//       <div>{userOffice.name}</div>

//       <ViewWorkflows office={userOffice.office} />

//       <ViewComplaints complaints={complaints} />

//       <ViewInvestigations
//         assignedInvestigations={assignedInvestigations}
//         involvedInvestigations={involvedInvestigations}
//       />
//     </div>
//     <div className="flex items-center justify-center">
//       <button
//         className="m-2 border-2 border-slate-400 bg-slate-400 p-2 text-white"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   </div>
// );
