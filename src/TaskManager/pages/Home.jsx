import { useNavigate } from "react-router-dom";






const Home = () => {


    const navigate = useNavigate()

    return (
        <>
            <h2>Page Home</h2>
            <button type="button" onClick={() => navigate('/Task')}>Task</button>
            <button type="button" onClick={() => navigate('/Stats')}>Stats</button>
        </>
    )
}
export default Home;