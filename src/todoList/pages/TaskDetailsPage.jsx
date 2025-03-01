import { useEffect, useState } from "react";
import { useTask } from "../components/contextMethode/ContextProvider";
import { useLocation } from "react-router-dom";
import InputFormTask from "../components/inputComponents/InputFormTask";
import Button from "../components/inputComponents/Button";

const TaskDetailsPage = () => {
  const location = useLocation();
  const task = location.state.task;
  const { tasks, updateTask, toggleTask, deleteTask, refreshTasks } = useTask();
  const [data, setData] = useState([]); // Initialise avec la tâche actuelle
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  // Charger les données une seule fois
  useEffect(() => {
    refreshTasks(); // Ne pas appeler `refreshTasks` dans un `useEffect` qui écoute `tasks`
  }, []);

  useEffect(() => {
    // refreshTasks();
    const updatedTask = tasks.find(([key]) => key === task.key);
    if (updatedTask) {
      setData({ key: updatedTask[0], ...updatedTask[1] });
    }
  }, [tasks]); // Réagit au changement de `tasks`

  const handleSubmitTitle = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return; // Vérifie si le titre est vide
    updateTask(data.key, formData.title, data.description); // Met à jour uniquement le titre
    setData({ ...data, title: formData.title }); // Met à jour l'affichage
    setFormData({ ...formData, title: "" }); // Réinitialise le champ titre
  };

  const handleSubmitDescription = (e) => {
    e.preventDefault();
    if (!formData.description.trim()) return; // Vérifie si la description est vide
    updateTask(data.key, data.title, formData.description); // Met à jour uniquement la description
    setData({ ...data, description: formData.description }); // Met à jour l'affichage
    setFormData({ ...formData, description: "" }); // Réinitialise le champ description
  };



  const handleToggleTask = () => {
    toggleTask(data.key, data.completed);
    refreshTasks();
  };
  const handleDeleteTask = () => {
    deleteTask(data.key);
    refreshTasks();
    setData([])
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(data);

  return (
    <>
      <div>
        <h2>Détails de la tâche</h2>
        <p>
          <strong>Titre :</strong> {data.title}
        </p>

        <InputFormTask
          nom="Modifier titre"
          name="title" // Ajoute name pour identifier l'input
          value={formData.title}
          handleSubmit={handleSubmitTitle}
          handleChange={handleChange}
        />

        <p>
          <strong>Description :</strong> {data.description || "Pas de description"}
        </p>

        <InputFormTask
          nom="Modifier description"
          name="description"
          value={formData.description}
          handleSubmit={handleSubmitDescription}
          handleChange={handleChange}
        />

        <p>
          <strong>Completed :</strong> {data.completed ? "Yes" : "Non"}
        </p>

        <Button actionName="Toggle" handleClick={handleToggleTask} />

        <Button actionName="Delete" handleClick={handleDeleteTask} />
      </div>
    </>
  );
};

export default TaskDetailsPage;
