import { useEffect, useState } from "react";
import ActionButton from "../components/ActionButton";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { addTask } from "../components/AuthTaskMethode";
import useAuthTaskMethode from "../components/AuthTaskMethode";
import { useTask } from "../components/TaskProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../firebase/firebase";
import { onValue, ref, get } from "firebase/database";
// import { useTask } from "../components/TaskProvider";

const Task = () => {
  const navigate = useNavigate();
  const { tasks, dispatch } = useTask();
  const { removeTask } = useAuthTaskMethode();

  // if (!tasks) {
  //   return "pas de jrhhrhrrh";
  // }


  
  if (!Array.isArray(tasks)) {
    console.log("tasks n'est pas un tableau :", tasks); // Aide à diagnostiquer le problème
    return <p>Chargement des tâches...</p>;
  }
  

  const handleDeleteTask = (task) => {
    // e.preventDefault();
    removeTask(task);
    dispatch({ type: "DELETE_TASK", payload: task })

  };

  return (
    <>
      <ul>
        {console.log("*************************************************************************")}
        {console.log(tasks)}

        {console.log("*************************************************************************")}

        {tasks.map(([cle, value]) => {
          return (
            <li key={cle}>
              {value.title}
              <span>
                <ActionButton
                  actionName={"Toggle Task"}
                  handleAction={() => dispatch({ type: "TOGGLE_TASK", payload: cle })}
                />
              </span>
              <span>
                <ActionButton
                  actionName={"Delete Task"}
                  handleAction={() => {
                    handleDeleteTask(cle);
                  }}
                />
              </span>
            </li>
          );
        })}
      </ul>

      <p>task</p>
      <ActionButton actionName={"Add Task"} handleAction={() => navigate("/AddTaskPAge")} />
      <br />

      <br />
    </>
  );
};

export default Task;
