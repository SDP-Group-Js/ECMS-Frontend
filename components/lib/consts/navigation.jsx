"use client";

import { FaUsers, FaFileSignature } from "react-icons/fa";

import { MdOutlineLocationCity } from "react-icons/md";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "complaints",
    label: "Complaints",
    path: "@/app/dashboard",
    icon: <FaFileSignature />,
  },
  {
    key: "institutions",
    label: "Institutions",
    path: "@/app/admin/Institutions",
    icon: <MdOutlineLocationCity />,
  },
  {
    key: "users",
    label: "Users",
    path: "@/app/admin/Users",
    icon: <FaUsers />,
  },
];
