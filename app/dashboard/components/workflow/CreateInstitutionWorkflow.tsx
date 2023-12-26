"use client";
import { useState } from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import SetStages from "./SetStages";
import Modal from "./Modal";
import { useAuth } from "@/context/auth";
import { auth } from "@/config/firebase";

interface CreateInstitutionWorkflowParamTypes {
  officeId: string;
  officeName: string;
  closeForm: any;
}

const CreateInstitutionWorkflow = ({
  officeId,
  officeName,
  closeForm,
}: CreateInstitutionWorkflowParamTypes) => {
  const [stages, setStages] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { user, fetchData } = useAuth() as any;

  const createWorkflow = async () => {
    try {
      const API_URL = "http://localhost:8080";
      const token = await auth.currentUser?.getIdToken(true);

      const body = JSON.stringify({
        officeId,
        stages,
        name,
        description,
      });
      const response = await fetch(`${API_URL}/api/workflow/institution`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: body,
      });
      if (response.ok) {
        alert(`Workflow Created`);
        await fetchData(auth.currentUser);
        closeForm();
      } else {
        throw new Error(`Workflow could not be created.`);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Modal onClick={closeForm}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-xl bg-white px-20 text-center"
      >
        <button
          onClick={closeForm}
          className="absolute right-2 top-2 h-fit w-fit rounded-full bg-red-700 p-1 text-white"
        >
          <FaTimes className="text-2xl" />
        </button>
        <div className="mt-5 text-3xl font-black">
          Create new workflow for {officeName}
        </div>
        <div className="m-auto mt-10 w-[600px]">
          <div className="">
            <div className="w-full text-left font-bold">Workflow Name</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="stageName"
              className="h-10 w-full rounded-lg border-2 border-gray-700 px-2 text-xl"
            />
          </div>
          <div className="">
            <div className="w-full text-left font-bold">
              Workflow Description
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="stageName"
              className="h-[100px] w-full resize-none rounded-lg border-2 border-gray-700 p-2 text-xl"
            />
          </div>

          <SetStages stages={stages} setStages={setStages} />

          <button
            onClick={createWorkflow}
            className="mb-5 mt-5 rounded-lg bg-gray-700 px-2 py-1 text-xl font-bold text-white"
          >
            Create Workflow
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateInstitutionWorkflow;
