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
    setStages(stages.map((stage: string, index: number) => {
        if (index == id) {
            return name
        }
        return stage
    }));
  }

  const removeStage = (index: number) => {
    setStages(stages.filter((_: any, i: number) => i !== index));
  };

  
  return (
    <>
      <div className="flex w-full mt-5 justify-center items-center">
        <input
          value={newStageName}
          onChange={(e) => setNewStageName(e.target.value)}
          placeholder="Stage Name"
          id="stageName"
          className="text-xl w-3/4 h-10 px-2 rounded-tl-lg border-2 border-gray-700"
        />
        <button
          disabled={newStageName.length == 0}
          onClick={addStage}
          className="bg-gray-700 w-1/4 text-white h-10 font-bold py-1 text-xl rounded-tr-lg"
        >
          Add Stage
        </button>
      </div>
      <div className="border-2 border-gray-700 border-t-0 pb-2 rounded-b-lg">
        <div className="overflow-auto w-full h-[300px]">
          {stages &&
            stages.map((stage: string, index: number) => (
              <Stage id={index} name={stage} removeStage={removeStage} editStage={editStage} />
            ))}
        </div>
      </div>
    </>
  );
}

const Stage = ({ id, name, removeStage, editStage }: any) => {
    const [updatedName, setUpdatedName] = useState(name)
  return (
    <div key={id} className="flex gap-2 w-full px-3 items-center border-2">
      <div>{id + 1}</div>
      <div className="flex-grow text-left">
            <input onBlur={() => editStage(updatedName, id)} className="w-full py-2" value={updatedName} onChange={e => setUpdatedName(e.target.value)} />
      </div>
      <div>
        <button
          onClick={() => removeStage(id)}
          className="rounded bg-red-700 text-white p-2"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
