import React from "react";
import { GiElephant } from "react-icons/gi";

export default function UserHeader() {
  return (
    <div className="flex h-20 items-center justify-between px-7">
      <div className="tg flex items-center justify-between gap-2">
        <GiElephant fontSize={40} />
        <span className="ts text-lg text-stone-900">Manage Users</span>
      </div>
    </div>
  );
}
