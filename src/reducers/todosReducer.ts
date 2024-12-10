export type todo = {
    id: number;
    taskLable: string;
    status: boolean;
}

type addTodo= {
    type: "ADDTODO"
    newTask : todo
}

type editTodo= {
    type: "EDITE"
    editedTask: todo
}

type removeTodo= {
    type: "REMOVE"
    todoId: number
}

export type todosAction = addTodo | editTodo | removeTodo 


const todosReducer = ( todos : todo[],  action: todosAction): todo[] => {
 
    let updatedTodo : todo[];

    switch (action.type) {
        case "ADDTODO":
            if(!todos.find(t => t.id === action.newTask.id)){
                updatedTodo = [...todos, action.newTask]
            }else{
                updatedTodo = [...todos]
            }

        break;

        case "EDITE":
            updatedTodo = todos.map(t => t.id === action.editedTask.id ? {...t, taskLable: action.editedTask.taskLable, status: action.editedTask.status} : t) 

        break;

        case "REMOVE":
            updatedTodo = todos.filter((t) => t.id !== action.todoId)

        break;

        default:
            throw new Error();
    }

    // save Local Storage
    localStorage.setItem("todo-list", JSON.stringify(updatedTodo));

    return updatedTodo;
}

export default todosReducer