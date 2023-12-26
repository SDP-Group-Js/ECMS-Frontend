import React, { useState } from "react";
import Link from "next/link";
import AddDivisionModal from "./AddDivisionModal";
import DivisionTable from "./DivisionTable";

import { MdGroupAdd } from "react-icons/md";

type props = {
  divisions: any;
};

export default function ManInst({ divisions }: props) {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const handleModalCloseButtonClick = () => {
    setAddModalVisible(false);
  };

  const handleAddButtonClick = () => {
    setAddModalVisible(true);
  };

  return (
    <div>
      <br></br>
      <div className="mx-14 my-10 rounded-md border-2 border-gray-400 px-3 py-4">
        <div className="mt-8 text-lg">
          <div className="flex items-center justify-start space-x-3">
            <div className="w-60">
              <button
                onClick={handleAddButtonClick}
                className=" w-50 h-15 flex items-center justify-center rounded-lg border-2 border-gray-700 bg-gray-700 px-2 py-1 font-bold text-white hover:border-gray-500 hover:bg-white hover:text-gray-500"
              >
                <MdGroupAdd className="h-8 w-6" /> Add Division
              </button>
              <AddDivisionModal
                isVisible={addModalVisible}
                handleModalCloseButtonClick={handleModalCloseButtonClick}
                textToDisplay="Add Division"
                onClick={handleAddButtonClick}
              />
            </div>
            <div className="flex w-full items-center justify-end">
              <label className="w-90">Number Of Divisions:&nbsp; </label>
              <span className="w-90">{divisions.length}</span>
            </div>
          </div>
          <br></br>

          <DivisionTable divisions={divisions} />
        </div>
      </div>
    </div>
  );
}
