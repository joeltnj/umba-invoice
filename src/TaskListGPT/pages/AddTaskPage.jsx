import { useId, useState } from "react";
import ActionButton from "../components/ActionButton";
import InputForm from "../components/InputForm";
import useAuthTaskMethode from "../components/AuthTaskMethode";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useTask } from "../components/TaskProvider";
import { useNavigate } from "react-router-dom";


const AddTaskPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate= useNavigate()

  const { addTask } = useTask();

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      {/* <input type="button" value={actionName} onClick={handleAction} /> */}

      <InputForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleAddTask={handleAddTask}
      />
      <br />
      {/* <ActionButton actionName={"Add Task"} handleAction={handleAction} /> */}
      <ActionButton actionName={"go to Task"} handleAction={() => navigate("/Task")} />
    </>
  );
};

export default AddTaskPage;



