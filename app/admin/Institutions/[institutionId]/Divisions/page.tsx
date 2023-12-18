"use client";

import React from "react";
import Sidebar from "@/app/components/shared/Sidebarn";
import DivHeader from "@/app/admin/components/manage-division/DivHeader";
import ManDiv from "@/app/admin/components/manage-division/Manage-Division";
import "@/app/Institutions/index.css"; //change

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <DivHeader />
        <div className="p-4">
          <ManDiv />
        </div>
      </div>
    </div>
  );
}
//changeee
