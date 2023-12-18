"use client";

import React from "react";
import { useRouter } from "next/router";
import ViewComplaints from "./components/complaints/ViewComplaints";
import ViewInvestigations from "./components/investigation/ViewInvestigations";
import { useAuth } from "@/context/auth";

export default function InstitutionPage() {

  // User object contains institution object that the user as access to.
  const {user} = useAuth()

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
      </div>
    </div>
  );
}
