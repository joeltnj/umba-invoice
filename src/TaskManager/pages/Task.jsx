import { useNavigate } from "react-router-dom"
import TaskInput from "../components/TaskInput"
import TaskList from "../components/TaskList"


const Task = () => {
    const navigate = useNavigate()

    return (
        <>
            <h2>Page Task</h2>

            <button type="button" onClick={() => navigate('/')}>Home</button>
            <button type="button" onClick={() => navigate('/Stats')}>Stats</button>


            <TaskInput />
            <TaskList />
        </>
    )
}

export default Task