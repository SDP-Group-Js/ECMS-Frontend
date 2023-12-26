import React, { useState } from "react";
import Link from "next/link";
import AddOfficeModal from "./AddOfficeModal";
import OfficesTable from "./OfficesTable";

import { MdGroupAdd } from "react-icons/md";

type props = {
  beatOffices: any;
};

export default function ManOffices({ beatOffices }: props) {
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
                <MdGroupAdd className="h-8 w-6" /> Add Beat Office
              </button>
              <AddOfficeModal
                isVisible={addModalVisible}
                handleModalCloseButtonClick={handleModalCloseButtonClick}
                textToDisplay="Add Office"
                onClick={handleAddButtonClick}
              />
            </div>
            <div className="flex w-full items-center justify-end">
              <label className="w-90">Number Of Beat Offices:&nbsp;</label>
              <span className="w-90">{beatOffices.length}</span>
            </div>
          </div>
          <br></br>

          <OfficesTable beatOffices={beatOffices} />
        </div>
      </div>
    </div>
  );
}
