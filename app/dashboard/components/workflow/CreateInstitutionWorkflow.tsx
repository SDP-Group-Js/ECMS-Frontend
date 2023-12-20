"use client";
import { useState } from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import SetStages from "./SetStages";
import Modal from "./Modal";
import { useAuth } from "@/context/auth";

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
  const { user } = useAuth() as any;

  const createWorkflow = async () => {
    const body = {
      name: name,
      stages: stages,
      officeId: officeId,
      description: description,
    };

    if (user) {
      const request = await fetch(`${API_URL}/api/workflow/instiution`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Authorization": `Bearer ${user.getIdToken(true)}`
        }
      })

      const response = await request.json()
      alert(response.message)
    } else {
      alert("Login Required")
    }
    
  };

  return (
    <Modal onClick={closeForm}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[600px] rounded-xl bg-white px-20 text-center"
      >
        <button className="absolute right-2 top-2 h-fit w-fit rounded-full bg-red-700 p-1 text-white">
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
              className="h-[50px] w-full resize-none rounded-lg border-2 border-gray-700 p-2 text-xl"
            />
          </div>

          <SetStages stages={stages} setStages={setStages} />

          <button
            onClick={createWorkflow}
            className="mt-5 rounded-lg bg-gray-700 px-2 py-1 text-xl font-bold text-white"
          >
            Create Workflow
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateInstitutionWorkflow;
