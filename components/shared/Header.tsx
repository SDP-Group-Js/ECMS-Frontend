import React from "react";
import { GiElephant } from "react-icons/gi";

type HeaderProps = {
  officeType: string;
  office: any;
};

enum OfficeType {
  Institution = "Institution",
  Division = "Division",
  Branch = "Branch",
  BeatOffice = "Beat Office",
}

export default function Header({ officeType, office }: HeaderProps) {
  return (
    <div className="flex h-20 items-center justify-between px-7">
      <div className="tg flex items-center justify-between gap-2">
        <GiElephant fontSize={40} />
        <span className="ts text-lg text-stone-900">{office.name}</span>
      </div>

      {officeType == OfficeType.Institution && (
        <div className="pd flex h-16 items-center justify-between px-14">
          <span className="text-xl font-bold">Office Type: Institution</span>
        </div>
      )}
      {officeType == OfficeType.Division && (
        <div className="pd flex h-16 items-center justify-between px-14">
          <span className="text-xl font-bold">Office Type: Division</span>
        </div>
      )}
      {officeType == OfficeType.Branch && (
        <div className="pd flex h-16 items-center justify-between px-14">
          <span className="text-xl font-bold">Office Type: Branch</span>
        </div>
      )}
      {officeType == OfficeType.BeatOffice && (
        <div className="pd flex h-16 items-center justify-between px-14">
          <span className="text-xl font-bold">Office Type: Beat Office</span>
        </div>
      )}
    </div>
  );
}
