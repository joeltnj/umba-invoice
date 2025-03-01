import { useEffect, useState } from "react";
import { useTask } from "../components/contextMethode/ContextProvider";
import { useLocation } from "react-router-dom";
import InputFormTask from "../components/inputComponents/InputFormTask";
import Button from "../components/inputComponents/Button";

const TaskDetailsPage = () => {
  const location = useLocation();
  const task = location.state.task;
  const { tasks, dispatch, addTask, updateTask, deleteTask, toggleTask, refreshTasks } = useTask();
  const [data, setData] = useState([]);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  // const [data, setData] useState('')
  // setFormData({ ...formData, title: title, description: description });
  const [submittedData, setSubmittedData] = useState(null);

  const theTask = tasks
    .map(([cle, value]) => {
      return cle === task.key ? { cle, ...value } : null;
    })
    .filter(Boolean);
  //
  const newtask = { ...theTask[0] };

  useEffect(() => {

    setData(newtask)
    refreshTasks();
    // setFormData({ ...formData, title: title, description: description });
  }, []);
  console.log(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.title);
    updateTask(data.cle, formData.title, formData.description);
    setData(newtask)
    refreshTasks();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSave = () => {
  //   return;
  // };
  return (
    <>
      {/* {console.log(task)} */}
      <div>
        <h2>Détails de la tâche</h2>
        {/* <p><strong>Clé :</strong> {task.key}</p> */}

        <p>
          <strong>Titre :</strong>:{data.title}
        </p>

        <InputFormTask
          nom="Modifier titre"
          title={formData.title}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />

        <p>
          <strong>Description :</strong> {formData.description || "Pas de description"}
        </p>

        <InputFormTask
          nom="Modifier description"
          title={description}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />

        <p>
          <strong>Completed :</strong> {task.completed ? "Yes" : "Non"}
        </p>

        <Button actionName={"Toggle"} handleClick={handleChange} />
      </div>

      <div>
        {/* modifier */}

        <br />
        <h2>Modifier la tâche</h2>
      </div>
    </>
  );
};
export default TaskDetailsPage;
