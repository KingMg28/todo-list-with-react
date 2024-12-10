import { AiOutlineDelete } from "react-icons/ai";
import Task from "./Task";
import { useContext } from "react";
import TodoContext from "../context/todoContext";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  let content;
  if (todos.length > 0) {
    content = (
      <div className="w-full  overflow-y-auto  scrollbar-thin  scrollbar-thumb-rose-700 scrollbar-track-transparent  border border-gray-400 rounded-xl bg-slate-200 m-3 p-1">
        <ul className="">
          {todos.map((t) => (
            <div
              key={t.id}
              className={t.status ? " line-through text-gray-400" : ""}
            >
              <li className="flex justify-between items-center bg-slate-100 m-5 rounded-md p-4 shadow-md ">
                <input
                  id="checkbox1"
                  type="checkbox"
                  checked={t.status}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  onChange={() => {
                    dispatch({
                      type: "EDITE",
                      editedTask: { ...t, status: !t.status },
                    });
                  }}
                />

                <div className="w-full ms-2 font-medium">
                  <Task
                    todo={t}
                    onEdite={(todo) => {
                      dispatch({
                        type: "EDITE",
                        editedTask: todo,
                      });
                    }}
                  />
                </div>
                <div className="flex mx-3">
                  <button className="flex justify-center items-center border-2  border-slate-300 rounded-md h-8 w-8 hover:bg-red-100">
                    <AiOutlineDelete
                      className=" text-red-600 text-2xl"
                      onClick={() => dispatch({ type: "REMOVE", todoId: t.id })}
                    />
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  } else {
    content = <div className="m-5">There is nothing to do</div>;
  }

  return content;
};

export default TodoList;
