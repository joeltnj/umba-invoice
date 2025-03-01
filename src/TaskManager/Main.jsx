
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Task from './pages/Task';
import Stats from './pages/Stats';
import TaskProvider from './components/TaskProvider';
const Main = () => {


    return (
        <TaskProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Task' element={<Task />} />
                    <Route path='/Stats' element={<Stats />} />
                </Routes>
            </BrowserRouter>
        </TaskProvider>


    )
}
export default Main