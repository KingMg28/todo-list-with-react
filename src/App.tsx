import { useEffect, useReducer } from "react";
import TodoList from "./componnents/TodoList";
import TodoContext from "./context/todoContext";
import todosReducer from "./reducers/todosReducer";
import AddTask from "./componnents/AddTask";

function App() {
  const [todos, dispatch] = useReducer(todosReducer, [], () => {
    //Initial load local todos
    const localTodos = localStorage.getItem("todo-list");
    return localTodos ? JSON.parse(localTodos) : [];
  });

  useEffect(() => {
    //update localStorage
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className=" max-h-screen flex flex-col items-center justify-center mx-16 ">
        <h1 className=" font-bold  text-5xl my-8">Todo-List</h1>
        <AddTask />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
