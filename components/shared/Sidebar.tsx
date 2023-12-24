"use client";

import React from "react";
import Link from "next/link";
import { GiElephant } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/consts/navigation";
import classNames from "classnames";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { FaUsers, FaFileSignature } from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";

const linkClasses =
  "flex items-center gap-4 border font-light px-5 py-2 hover:bg-neutral-200 hover:no-underline active:bg-neutral-200 rounded-sm text-base text-stone-900 pt";

interface sideBarProps {
  user: any;
}

interface SidebarItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

interface SidebarLinkProps {
  item: SidebarItem;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ item }) => {
  return (
    <Link href={item.path} passHref>
      <span className={classNames("text-xl", linkClasses)}>
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </span>
    </Link>
  );
};

const Sidebarn = ({ user }: sideBarProps) => {
  // Dummy data
  const userData = {
    name: user.name,
    role: user.userRole,
    isAdmin: false,
  };
  if (user.userRole == "SystemAdmin" || user.userRole == "OfficeAdmin") {
    userData.isAdmin = true;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.pathname = "/";
    } catch (error) {
      console.log("Logout error: " + error);
    }
  };

  return (
    <div className="text-brown flex w-60 flex-col bg-neutral-300 p-3">
      <div className="flex items-center gap-3 px-2 py-2">
        <GiElephant fontSize={26} />
        <b>
          <span className="h text-lg text-stone-900">Wildlife Institution</span>
        </b>
      </div>

      <div className="pr flex">Welcome back, {userData.name}</div>

      <div className="pt flex-1 flex-col text-stone-900">
        {/* {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))} */}
        <Link href={"/dashboard"}>
          <div className="my-2 flex items-center justify-start rounded-md border-2 border-gray-700 p-2 text-xl hover:bg-white hover:text-black">
            <span>
              <FaFileSignature />
            </span>
            &nbsp;&nbsp;
            <span>Complaints</span>
          </div>
        </Link>
        <Link href={"/admin/Institutions"}>
          <div className="my-2 flex items-center justify-start rounded-md border-2 border-gray-700 p-2 text-xl hover:bg-white hover:text-black">
            <span>
              <MdOutlineLocationCity />
            </span>
            &nbsp;&nbsp;
            <span>Institutions</span>
          </div>
        </Link>
        <Link href={"/admin/Users"}>
          <div className="my-2 flex items-center justify-start rounded-md border-2 border-gray-700 p-2 text-xl hover:bg-white hover:text-black">
            <span>
              <FaUsers />
            </span>
            &nbsp;&nbsp;
            <span>Users</span>
          </div>
        </Link>
      </div>

      <div>
        <button onClick={handleLogout}>
          <div className={classNames("pi", linkClasses)}>
            <span className="text-xl">
              <FiLogOut />
            </span>
            Logout
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebarn;
