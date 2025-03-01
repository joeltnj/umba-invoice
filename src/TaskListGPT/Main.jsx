import ConnexionManager from "./components/ConnexionManager";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Task from "./pages/Task";
import SignUp from "./pages/SignUp";
import AddTaskPage from "./pages/AddTaskPage";

import ContextProvider from "./components/ContextProvider";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TaskProvider from "./components/TaskProvider";

const Main = () => {
  return (
    <>
      {/* <h2>Main Page</h2> */}
      {/* <Home /> */}
      {/* <Task /> */}
      {/* < /> */}

      {/* <ContextProvider> */}
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/Task" element={<Task />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ConnexionManager" element={<ConnexionManager />} />
            <Route path="/AddTaskPAge" element={<AddTaskPage />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
      {/* </ContextProvider> */}
    </>
  );
};

export default Main;
