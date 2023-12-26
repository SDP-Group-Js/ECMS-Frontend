"use client";

import React from "react";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
//import "@/app/components/shared/HeaderStyles.css";
import DashboardContentPanel from "@/components/shared/DashboardContentPanel";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-slate-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="px-14 py-10">
          <DashboardContentPanel />
        </div>
      </div>
    </div>
  );
}
