import { useContext, useState } from "react";
import TodoContext from "../context/todoContext";

const AddTask = () => {
  const { dispatch } = useContext(TodoContext);

  const [newTask, setNewTask] = useState("");

  return (
    <div className="flex gap-6 mt-2 w-full">
      <input
        type="text"
        name="search-input"
        id="search-input"
        className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        className=" bg-blue-500 rounded-xl px-5 text-white whitespace-nowrap"
        onClick={() => {
          if (newTask) {
            dispatch({
              type: "ADDTODO",
              newTask: { id: Date.now(), taskLable: newTask, status: false },
            });
            setNewTask("");
          }
        }}
      >
        Add +
      </button>
    </div>
  );
};

export default AddTask;
