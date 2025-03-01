
import React from 'react';

import Task from './Task';

import { useNavigate } from 'react-router-dom';
import Affiche from './Affiche';
// import Home from './Home';



const Home = () => {

    const navigate = useNavigate()

    return (

        <>
            <h2>Home Page</h2>
            <Affiche />

            {/* <button onClick={() => navigate('/Task')}>Task</button> */}
            {/* <button onClick={() => navigate('/Stats')}>Stats</button> */}
            <button onClick={() => navigate('/Login')}>Login</button>
            <button onClick={() => navigate('/SignUp')}>SignUp</button>


            {/* <button onClick={() => navigate('/ConnexionManager')}>ConnexionManager</button> */}






        </>
    )
}

export default Home