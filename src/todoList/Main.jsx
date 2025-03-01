import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import AddTaskPage from "./pages/AddTaskPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import AnalyticsPage from "./pages/AnalyticsPage";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./components/contextMethode/ContextProvider";
const Main = () => {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/AddTaskPage" element={<AddTaskPage />} />
            <Route path="/TaskDetailsPage" element={<TaskDetailsPage />} />
            {/* <Route path="/AnalyticsPage" element={<AnalyticsPage />} /> */}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};
export default Main;
