"use client";
import React, { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaExternalLinkAlt,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import Modal from "../workflow/Modal";
import { storage } from "@/config/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

type ViewInvestigationActionProps = {
  investigationStages: any;
};

type InvestigationStageProps = {
  active: boolean;
  investigationStage: any;
};

const ViewInvestigationActions = ({
  investigationStages,
}: ViewInvestigationActionProps) => {
  return (
    <div>
      {investigationStages.map((investigationStage: any, index: number) => (
        <InvestigationStage
          key={index + 1}
          active={investigationStage.status == "Ongoing" ? true : false}
          investigationStage={investigationStage}
        />
      ))}
    </div>
  );
};

const InvestigationStage = ({
  active,
  investigationStage,
}: InvestigationStageProps) => {
  const [open, setOpen] = useState(active);
  const [openTakeAction, setOpenTakeAction] = useState(false);
  const [selectedAction, setSelectedAction] = useState<any>(null);

  let investigationStageDescription = "No description available";
  if (investigationStage.description != null) {
    investigationStageDescription = investigationStage.description;
  }

  return (
    <div className="mx-0 mt-4 rounded-lg border-2 p-2">
      <div className="flex items-center gap-2">
        <div className="mr-5 text-xl font-bold">
          {investigationStage.stageName}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="rounded p-1 hover:bg-gray-700 hover:text-white"
        >
          {open ? (
            <FaAngleUp className="h-8 w-8" />
          ) : (
            <FaAngleDown className="h-8 w-8" />
          )}
        </button>
        {investigationStage.status == "Pending" && (
          <div className="rounded-full bg-red-500 px-2 py-1 text-lg text-white">
            {investigationStage.status}
          </div>
        )}
        {investigationStage.status == "Ongoing" && (
          <div className="rounded-full bg-yellow-500 px-2 py-1 text-lg text-white">
            {investigationStage.status}
          </div>
        )}
        {investigationStage.status == "Completed" && (
          <div className="rounded-full bg-green-500 px-2 py-1 text-lg text-white">
            {investigationStage.status}
          </div>
        )}
      </div>
      {open && (
        <>
          <div className="mb-10 mt-2 h-10 w-full">
            {investigationStageDescription}
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">Actions Taken</div>
            </div>
            <div>
              {investigationStage.actions.length > 0 &&
                investigationStage.actions.map((action: any, index: number) => (
                  <div
                    className="my-2 flex items-center gap-2 rounded-lg border-2 px-3 py-2"
                    key={index}
                  >
                    <div className="text-lg font-bold">{action.name}</div>
                    <div className="text-lg">{action.description}</div>
                    <div className="flex-grow" />
                    <button
                      onClick={() => setSelectedAction(action)}
                      className="flex items-center gap-2 rounded-lg border-2 px-2 py-1 text-xl font-bold hover:bg-gray-600 hover:text-white"
                    >
                      <div>Captured Evidence</div> <FaExternalLinkAlt />
                    </button>
                  </div>
                ))}
              {investigationStage.actions.length == 0 && (
                <div className="text-lg">No actions taken</div>
              )}
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
        className="relative w-1/3 rounded-lg bg-white p-5"
      >
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 h-fit w-fit rounded-full bg-red-700 p-1 text-lg text-white"
        >
          <FaTimes />
        </button>
        <div className="text-2xl font-bold ">Take Action</div>
        <div>
          <div className="text-lg font-bold">Action Name</div>
          <input className="w-full rounded border-2 px-2 py-1" />
        </div>
        <div className="mt-4">
          <div className="text-lg font-bold">Action Name</div>
          <textarea className="h-[100px] w-full resize-none rounded border-2 px-2 py-1" />
        </div>

        <button className="rounded bg-red-700 px-2 py-1 text-lg font-bold text-white">
          Take Action
        </button>
      </div>
    </Modal>
  );
};

const ViewActionDetail = ({ action, closeModal }: any) => {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const actionEvidenceRef = ref(storage, `action-evidence/${action.id}/`);

      try {
        const imageList = await listAll(actionEvidenceRef);

        const imageFiles = await Promise.all(
          imageList.items.map(async (imageRef) => {
            const downloadURL = await getDownloadURL(imageRef);
            return { name: imageRef.name, url: downloadURL };
          }),
        );

        setFiles(imageFiles);
      } catch (error) {
        console.error("Error fetching images:", error);
        setFiles([]);
      }
    };

    fetchImages();
  }, [action]);

  return (
    <Modal onClick={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-5/6 rounded-lg bg-white p-3"
      >
        <button
          onClick={closeModal}
          className="absolute right-3 top-3 rounded-full bg-red-700 p-1 text-xl text-white"
        >
          <FaTimes />
        </button>
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">{action.name}</div>
          <span className="text-xl font-bold">&nbsp;by&nbsp;</span>
          <div className="text-xl font-bold">{action.user.name}</div>
        </div>
        <div className="my-4">{action.description}</div>
        <div className="m-auto flex w-fit flex-wrap gap-2">
          {files.map((file, index: number) => (
            <div
              className="flex h-[250px] w-[500px] items-center justify-center bg-gray-300"
              key={index}
            >
              <img
                src={file.url}
                alt={`Preview ${index}`}
                className="mx-auto mb-2 max-h-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ViewInvestigationActions;
