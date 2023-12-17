"use client";
import React, { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import Modal from "../Modal";

const ViewInvestigationActions = () => {
  return (
    <div>
      <InvestigationStage active={true} />
      <InvestigationStage />
      <InvestigationStage />
    </div>
  );
};

const InvestigationStage = ({
  active,
  selectedStage,
  setSelectedStage,
}: any) => {
  const [open, setOpen] = useState(active);
  const [openTakeAction, setOpenTakeAction] = useState(false);
  const [selectedAction, setSelectedAction] = useState<any>(null);

  const sampleAction = {
    name: "[Action Name]",
    description: "[Action Description]",
    type: "Officers' Action",
  };

  return (
    <div className='m-auto mt-5 w-5/6 rounded-lg p-2 border-2'>
      <div className='flex  gap-2 items-center'>
        <div className='font-bold text-xl mr-5'>On-Site Investigation</div>
        <div className='font-bold flex-grow'>Involved Parties: </div>
        {active ? (
          <button className='bg-green-800 w-fit text-white font-bold px-2 py-1 rounded-lg'>
            Complete Stage
          </button>
        ) : (
          <button
            onClick={() => setOpen(!open)}
            className='p-1 rounded hover:bg-gray-700 hover:text-white'
          >
            {open ? (
              <FaAngleUp className='w-8 h-8' />
            ) : (
              <FaAngleDown className='w-8 h-8' />
            )}
          </button>
        )}
      </div>
      {open && (
        <>
          <div className='w-full h-10 mt-2 mb-10'>[stage description]</div>
          <div>
            <div className='flex justify-between items-center'>
              <div className='text-xl font-bold'>Actions Taken</div>
              {active && (
                <button
                  onClick={() => setOpenTakeAction(true)}
                  className='bg-gray-600 text-white font-bold text-lg w-fit px-2 py-1 rounded-lg'
                >
                  Take Action
                </button>
              )}
            </div>
            <div>
              {[sampleAction, sampleAction, sampleAction].map((item) => (
                <div className='flex gap-2 border-2 px-3 py-2 my-2 rounded-lg items-center'>
                  <div>[Action Name]</div>
                  <div>[Action Description]</div>
                  <div>Officer's Action</div>
                  <div className='flex-grow' />
                  <button
                    onClick={() => setSelectedAction(item)}
                    className='flex gap-2 hover:text-white hover:bg-gray-600 text-xl items-center font-bold px-2 py-1 rounded-lg border-2'
                  >
                    <div>Captured Evidence</div> <FaExternalLinkAlt />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {openTakeAction && (
        <TakeActionForm closeModal={() => setOpenTakeAction(false)} />
      )}

      {selectedAction && (
        <ViewActionDetail
          closeModal={() => setSelectedAction(null)}
          action={selectedAction}
        />
      )}
    </div>
  );
};

const TakeActionForm = ({ closeModal }: any) => {
  return (
    <Modal onClick={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white relative rounded-lg p-5 w-1/3'
      >
        <button
          onClick={closeModal}
          className='text-lg text-white bg-red-700 w-fit h-fit p-1 absolute top-2 right-2 rounded-full'
        >
          <FaTimes />
        </button>
        <div className='font-bold text-2xl '>Take Action</div>
        <div>
          <div className='font-bold text-lg'>Action Name</div>
          <input className='border-2 w-full rounded px-2 py-1' />
        </div>
        <div className='mt-4'>
          <div className='font-bold text-lg'>Action Name</div>
          <textarea className='border-2 w-full h-[100px] resize-none rounded px-2 py-1' />
        </div>

        <button className='px-2 py-1 font-bold rounded text-lg text-white bg-red-700'>
          Take Action
        </button>
      </div>
    </Modal>
  );
};

const ViewActionDetail = ({ action, closeModal }: any) => {
  return (
    <Modal onClick={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className='relative bg-white rounded-lg w-5/6 p-3'
      >
        <button
          onClick={closeModal}
          className='bg-red-700 p-1 rounded-full text-xl text-white absolute top-3 right-3'
        >
          <FaTimes />
        </button>
        <div className='flex gap-2 items-center'>
          <div className='text-2xl font-bold'>[Action Name]</div>
          <div className='text-xl font-bold'>Officer's Action</div>
        </div>
        <div>[Action Description]</div>
        <div className='flex gap-2 w-fit m-auto flex-wrap'>
          <div className='w-[500px] h-[250px] bg-gray-300' />
          <div className='w-[500px] h-[250px] bg-gray-300' />
          <div className='w-[500px] h-[250px] bg-gray-300' />
          <div className='w-[500px] h-[250px] bg-gray-300' />
        </div>
      </div>
    </Modal>
  );
};

export default ViewInvestigationActions;
