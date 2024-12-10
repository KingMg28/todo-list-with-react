import { useState } from "react";
import { todo } from "../reducers/todosReducer";
import { MdEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";

interface Props {
  todo: todo;
  onEdite: (todo: todo) => void;
}

const Task = ({ todo, onEdite }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <div className="flex items-center">
        <input
          type="text"
          className="  w-full p-2 rounded-lg"
          value={todo.taskLable}
          onChange={(e) => {
            onEdite({ ...todo, taskLable: e.target.value });
          }}
        />
        <button className="flex justify-center items-center ms-3 border-2 border-slate-300 rounded-md h-8 w-8 hover:bg-green-100">
          <MdDone
            onClick={() => setIsEditing(false)}
            className=" text-green-500 text-2xl"
          />
        </button>
      </div>
    );
  } else {
    todoContent = (
      <div className="flex items-center">
        <h1 className="w-full">{todo.taskLable}</h1>
        <button className="flex justify-center items-center ms-3 border-2 border-slate-300 rounded-md h-8 w-8 hover:bg-yellow-100">
          <MdEdit
            className=" text-yellow-400 text-2xl"
            onClick={() => setIsEditing(true)}
          />
        </button>
      </div>
    );
  }
  return <div>{todoContent}</div>;
};

export default Task;
