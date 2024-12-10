import {  Dispatch } from "react"
import { todo, todosAction } from "../reducers/todosReducer"
import React from "react"

interface TodoContextType {
    todos : todo[]
    dispatch : Dispatch<todosAction>
}

const TodoContext =React.createContext<TodoContextType>({} as TodoContextType)

export default TodoContext