"use client";

import React from "react";
import OfficesHeader from "@/app/admin/components/manage-offices/OfficesHeader";
import ManOffices from "@/app/admin/components/manage-offices/Manage-Office";
import "@/app/Institutions/index.css"; //change this
import Sidebar from "@/components/shared/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <OfficesHeader />
        <div className="p-4">
          <ManOffices />
        </div>
      </div>
    </div>
  );
}
