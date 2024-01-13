import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function SetStages({ stages, setStages }: any) {
  const [newStageName, setNewStageName] = useState("");
  const addStage = () => {
    if (newStageName.length > 0) {
      setStages((stages: any) => [...stages, newStageName]);
      setNewStageName("");
    }
  };

  const editStage = (name: string, id: number) => {
    setStages(
      stages.map((stage: string, index: number) => {
        if (index == id) {
          return name;
        }
        return stage;
      }),
    );
  };

  const removeStage = (index: number) => {
    setStages(stages.filter((_: any, i: number) => i !== index));
  };

  return (
    <>
      <div className="mt-5 flex w-full items-center justify-center">
        <input
          value={newStageName}
          onChange={(e) => setNewStageName(e.target.value)}
          placeholder="Stage Name"
          id="stageName"
          className="h-10 w-3/4 rounded-tl-lg border-2 border-gray-700 px-2 text-xl"
        />
        <button
          disabled={newStageName.length == 0}
          onClick={addStage}
          className="h-10 w-1/4 rounded-tr-lg bg-gray-700 py-1 text-xl font-bold text-white"
        >
          Add Stage
        </button>
      </div>
      <div className="rounded-b-lg border-2 border-t-0 border-gray-700 pb-2">
        <div className="h-[300px] w-full overflow-auto">
          {stages &&
            stages.map((stage: string, index: number) => (
              <Stage
                key={index}
                id={index}
                name={stage}
                removeStage={removeStage}
                editStage={editStage}
              />
            ))}
        </div>
      </div>
    </>
  );
}

const Stage = ({ id, name, removeStage, editStage }: any) => {
  const [updatedName, setUpdatedName] = useState(name);
  return (
    <div key={id} className="flex w-full items-center gap-2 border-2 px-3">
      <div>{id + 1}</div>
      <div className="flex-grow text-left">
        <input
          onBlur={() => editStage(updatedName, id)}
          className="w-full py-2"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => removeStage(id)}
          className="rounded bg-red-700 p-2 text-white"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
