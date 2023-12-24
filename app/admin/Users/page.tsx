"use client";

import React from "react";
import UserHeader from "./UserHeader";
import Users from "./Users";
import "./index.css";
import Sidebar from "@/components/shared/Sidebar";
import { auth } from "@/config/firebase";
import { useAuth } from "@/context/adminAuth";
import ManageUser from "./ManageUserRoles/Manage-User";


export default function Home() {
  const { user } = useAuth() as any;

  return (
    <div className="flex h-screen w-screen flex-row overflow-hidden bg-slate-50">
      <Sidebar user={user.details} />
      <div className="flex-1">
        <UserHeader />
        <div className="p-4">
          <ManageUser />
        </div>
      </div>
    </div>
  );
}
