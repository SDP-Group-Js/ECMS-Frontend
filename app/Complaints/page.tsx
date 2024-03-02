"use client";

import React, { useState } from "react";
import { auth } from "@/config/firebase";
import { useAuth } from "@/context/complaintHandlerAuth";
import { signOut } from "firebase/auth";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
import "@/components/shared/HeaderStyles.css";
import ViewComplaints from "./components/ViewComplaints";

enum OfficeType {
  Institution = "Institution",
  Division = "Division",
  Branch = "Branch",
  BeatOffice = "Beat Office",
}

export default function Home() {
  const { user, complaints, institutions, users } = useAuth() as any;
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.pathname = "/";
    } catch (error) {
      console.log("Logout error: " + error);
    }
  };

  const handleDashboard = () => {
    window.location.pathname = "/dashboard";
  };

  const userOffice = user.details.office;
  let officeType: OfficeType = OfficeType.BeatOffice;
  if (userOffice.Institution != null) {
    officeType = OfficeType.Institution;
  } else if (userOffice.Division != null) {
    officeType = OfficeType.Division;
  } else if (userOffice.Branch != null) {
    officeType = OfficeType.Branch;
  }

  let isComplaintHandler = false;
  if (user.details.userRole == "ComplaintHandler") {
    isComplaintHandler = true;
  }

  return (
    <div className="flex h-full min-h-screen w-screen flex-row overflow-y-visible bg-slate-50">
      <div className="flex-1">
        {/* <Header officeType={officeType} office={userOffice} /> */}
        <div className="px-14 py-10">
          <ViewComplaints
            complaints={complaints}
            institutionName={userOffice.name}
          />
        </div>
        <div className="mt-20 flex items-center justify-center">
          <button
            className="m-2 rounded-full border-2 border-green-500 bg-green-500 px-4 py-3 text-xl font-bold text-white hover:bg-white hover:text-green-500"
            onClick={handleDashboard}
          >
            Dashboard
          </button>
          <button
            className="m-2 rounded-full border-2 border-slate-500 bg-slate-500 px-4 py-3 text-xl font-bold text-white hover:bg-white hover:text-slate-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
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
