import { useNavigate } from "react-router-dom"
import TaskStats from "../components/TaskStats"


const Stats = () => {
    const navigate = useNavigate()

    return (
        <>
            <h2>Page Stats</h2>

            <button type="button" onClick={() => navigate('/')}>Home</button>
            <button type="button" onClick={() => navigate('/Task')}>Task</button>
            {/* <TaskStats /> */}

        </>
    )
}

export default Stats