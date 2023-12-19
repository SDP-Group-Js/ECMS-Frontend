"use client";

import React from "react";
import ViewComplaints from "./components/complaints/ViewComplaints";
import ViewInvestigations from "./components/investigation/ViewInvestigations";
import { auth } from "@/config/firebase";
import { useAuth } from "@/context/auth";
import { signOut } from "firebase/auth";

export default function InstitutionPage() {
  // User object contains institution object that the user as access to.
  const { user } = useAuth();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.pathname = "/";
    } catch (error) {
      console.log("Logout error: " + error);
    }
  };

  // const userOffice = user.office;

  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-slate-50">
      <div className="flex-1">
        <div>Main Dashboard</div>
        {/* <div>{userOffice.name}</div> */}

        {/* <div>
          {userOffice?.institution && (
            <ViewComplaints complaints={userOffice.institution.complaints} />
          )}
          <ViewInvestigations complaints={userOffice} />
        </div> */}
        <div className="flex items-center justify-center">
          <button
            className="m-2 border-2 border-slate-400 bg-slate-400 p-2 text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
