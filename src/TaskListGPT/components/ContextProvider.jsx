
import React, { createContext, useContext, useReducer, useState } from 'react'




const TaskContext = createContext()

const ContextProvider = ({ children }) => {

    const [task, setTasks] = useState([])


    const taskReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TASK':
                return [...state, action.task]
            case 'DELETE_TASK':
                return state.filter((task) => task.id !== action.id)
            case 'TOGGLE_TASK':
                return state.map((task) => task.id === action.id ? { ...task, completed: !task.completed } : task)
            default:
                return state
        }
    }

    const [tasks, dispatch] = useReducer(taskReducer, [])

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}
export default ContextProvider

export function useTask() {
    return useContext(TaskContext)
}