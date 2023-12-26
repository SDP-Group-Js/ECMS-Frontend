"use client";

import React from "react";
import UserHeader from "./UserHeader";
import Users from "./Users";
import "./index.css";
import Sidebar from "@/components/shared/Sidebar";
import { auth } from "@/config/firebase";
import { useAuth } from "@/context/adminAuth";
import ManageUser from "./ManageUserRoles/Manage-User";
import ManagePublicUser from "./ManageUserRoles/ManagePublicUser";
import "@/components/shared/HeaderStyles.css";

export default function Home() {
  const { user, users, publicUsers } = useAuth() as any;

  return (
    <div className="flex h-full w-screen flex-row overflow-y-visible bg-slate-50">
      <Sidebar user={user.details} />
      <div className="flex-1">
        <UserHeader />
        <div className="p-4">
          <ManageUser users={users} />
          <ManagePublicUser users={publicUsers} />
        </div>
      </div>
    </div>
  );
}
