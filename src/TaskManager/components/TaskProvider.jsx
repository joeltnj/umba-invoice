import { createContext, useContext, useReducer } from "react"



const taskReducer = (state, action) => {
    if (action.type === 'add_task') {
        return [...state, { id: Date.now(), text: action.payload, completed: false }]
    }
    else if (action.type === 'remove_task') {
        return state.filter((task) => task.id !== action.payload)
    }
    else if (action.type === 'toggle_task') {
        return state.map((task) => {
           return  task.id === action.payload ? { ...task, completed: !task.completed } : task
        })
    }
    else if (action.type === 'clear_task') {
        return []
    }
}

const TaskContext = createContext();

const TaskProvider = ({ children }) => {

    const [tasks, dispatch] = useReducer(taskReducer, [])
    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>

    )
}

export function useTask() {
    return useContext(TaskContext)
}

export default TaskProvider