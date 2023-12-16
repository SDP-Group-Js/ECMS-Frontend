"use client";

import React from "react";
import Sidebar from "@/app/components/shared/Sidebar";
import Header from "@/app/components/shared/Header";
import "@/app/components/shared/HeaderStyles.css";
import DashboardContentPanel from "@/app/components/shared/DashboardContentPanel";

export default function Home() {
  return (
    <div className='flex flex-row bg-slate-50 h-screen w-screen overflow-hidden'>
      <Sidebar />
      <div className='flex-1'>
        <Header />
        <div className='px-14 py-10'>
          <DashboardContentPanel />
        </div>
      </div>
    </div>
  );
}
