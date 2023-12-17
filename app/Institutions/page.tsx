"use client";

import React from "react";
import Sidebarn from "../components/shared/Sidebarn";
import InstmHeader from "../components/institution-module/institution-man/InstmHeader";
import ManInst from "../components/institution-module/institution-man/Manage-Institutions";
import "./index.css";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-slate-50">
      <Sidebarn />
      <div className="flex-1">
        <InstmHeader />
        <div className="p-4">
          <ManInst />
        </div>
      </div>
    </div>
  );
}
