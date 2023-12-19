import React, { useState } from 'react'
import Link  from 'next/link'
import AddUserModal from './AddUserModal'
import UserTable from './UserTable'

import { MdGroupAdd } from "react-icons/md";


export default function ManInst() {
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
                <button onClick={handleAddButtonClick} className=" flex w-50 h-15 items-center justify-center rounded-lg border-2 border-gray-700 bg-gray-700 px-2 py-1 font-bold text-white hover:border-gray-500 hover:bg-white hover:text-gray-500">
                  <MdGroupAdd className='w-6 h-8'/> Add User
                </button>
                <AddUserModal
                  isVisible={addModalVisible}
                  handleModalCloseButtonClick={handleModalCloseButtonClick}
                  textToDisplay="Add Institute"
                  onClick={(handleAddButtonClick)}
                />
                </div>
                <div className='flex justify-end items-center w-full'>
                  <label className="w-90">Number Of Users </label>
                  <span className="w-90"> 21 </span>
                </div>
              </div>
              <br></br>

              <UserTable />
            </div>
          </div>
      </div>
  )
}