import { useState } from "react";
import { useTask } from "./TaskProvider";


const TaskInput=()=>{

    const [newTask, setNewTask]=useState('')

    const {dispatch}=useTask()

    const addTask = ()=>{
        dispatch({type:'add_task', payload: newTask})
        setNewTask('')
    }




    return (


        <>
            <input type="text" name="" id="" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
            <button type="button" onClick={addTask}>Add Task</button>
        
        </>
    )
}

export default TaskInput;