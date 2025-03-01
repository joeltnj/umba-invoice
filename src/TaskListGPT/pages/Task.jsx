import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTask } from "../components/TaskProvider";
import ActionButton from "../components/ActionButton";

const Task = () => {
  const navigate = useNavigate();
  const { tasks, data, refreshTasks, dispatch, removeTask, toggleTask } = useTask();

  // Charger les tâches uniquement au montage du composant
  useEffect(() => {
    refreshTasks();
  }, []); // [] garantit que ça s'exécute uniquement au montage

  const handleDeleteTask = (task) => {
    removeTask(task);
    dispatch({ type: "DELETE_TASK", payload: task });
    refreshTasks();
  };
  const handleToggleTask = (task, currentState) => {
    toggleTask(task, currentState);
    // dispatch({ type: "TOGGLE_TASK", payload: task });
    refreshTasks();
  };

  const taskTrue = tasks.filter((task) => {
    return task[1].completed === true;
  });
  if (tasks === null) {
    return "pas des donnee";
  }
  return (
    <>
      <ul>
        {taskTrue.map(([cle, value]) => {
          return (
            <li key={cle}>
              {value.title} {value.completed || false ? "YES" : "NON"}
              <span>
                <ActionButton
                  actionName={"Toggle Task"}
                  handleAction={() => {
                    handleToggleTask(cle, value.completed);
                  }}
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
