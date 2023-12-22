"use client";

import React, { useState } from "react";
import { auth } from "@/config/firebase";
import { useAuth } from "@/context/auth";
import { signOut } from "firebase/auth";
import "@/components/shared/HeaderStyles.css";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
import DashboardContentPanel from "@/components/shared/DashboardContentPanel";

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
  let officeType: OfficeType = OfficeType.BeatOffice;
  if (userOffice.Institution != null) {
    complaints = userOffice.Institution.complaints;
    officeType = OfficeType.Institution;
  } else if (userOffice.Division != null) {
    complaints = userOffice.Division.Institution.complaints;
    officeType = OfficeType.Division;
  } else if (userOffice.Branch != null) {
    complaints = userOffice.Branch.Division.Institution.complaints;
    officeType = OfficeType.Branch;
  } else if (userOffice.BeatOffice != null) {
    console.log("BeatOffice");
    complaints = userOffice.BeatOffice.Branch.Division.Institution.complaints;
    console.log(complaints);
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
          />
        </div>
        {!isAdmin && (
          <button
            className="m-2 border-2 border-slate-400 bg-slate-400 p-2 text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
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
