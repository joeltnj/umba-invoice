import { useState, useEffect } from "react";
import { useTask } from "../components/contextMethode/ContextProvider";
import { useNavigate } from "react-router-dom";
import InputFormAddTask from "../components/inputComponents/InputFormAddTask";

const HomePage = () => {
  // const [data, setData] = useState;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", description: "" });

  const { tasks, dispatch, addTask, deleteTask, toggleTask, refreshTasks } = useTask();
  useEffect(() => {
    refreshTasks();
  }, []); // [] garantit que ça s'exécute uniquement au montage

  const handleClick = (key, value) => {
    // console.log("Tâche sélectionnée :", value.title, "avec la clé :", key);
    navigate(`/TaskDetailsPage`, { state: { task: { key, ...value } } });
    // navigate(`/TaskDetailsPage`);
  };
  const handleSubmit = (e) => {
    console.log(formData.title, formData.description);

    e.preventDefault();
    addTask(formData.title, formData.description);
    setFormData({ title: "", description: "" });
    refreshTasks()
    
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Home Page</h1>

      {/* {console.log(tasks)} */}

      <ul>
        {tasks.map(([key, value]) => {
          return (
            <li key={key} onClick={() => handleClick(key, value)}>
              {value.title}
            </li>
          );
        })}
      </ul>
      <h2>add Task</h2>
      <InputFormAddTask
        title={formData.title}
        description={formData.description}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
};
export default HomePage;
