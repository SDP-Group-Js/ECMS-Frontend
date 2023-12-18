"use client";

import React from "react";
import InstmHeader from "@/app/admin/components/institution-module/institution-man/InstmHeader";
// import "./index.css";
import Sidebar from "@/components/shared/Sidebar";
import ManInst from "../components/manage-division/Manage-Division";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <InstmHeader />
        <div className="p-4">
          <ManInst />
        </div>
      </div>
    </div>
  );
}
//changeee
