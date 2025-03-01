// import { useState, useReducer, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { database, auth } from "../../firebase/firebase";
// import { ref, set, push, get, update } from "firebase/database";
// // import { useTask } from "../components/ContextProvider"

// const Task = () => {
//   const taskControler = (tasks, action) => {
//     if (action.type === "add_task") {
//       return [
//         ...tasks,
//         {
//           id: "",
//           title: action.payload,
//           description: action.payload.description || "No description",
//           completed: false,
//         },
//       ];
//     } else if (action.type === "remove_task") {
//       return tasks.filter((task) => !task.id === action.payload);
//     } else if (action.type === "toggle_task") {
//       tasks.map((task) => {
//         task.id === action.payload
//           ? { ...task, completed: !task.completed }
//           : task;
//       });
//     }
//   };

//   const addTaskHandle = async () => {
//     try {
//         await push(ref(database,"user")
//     {
//         title=""
//     })
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   return (
//     <>
//       <h2>Task Page</h2>

//       <form action="">
//         <label htmlFor="">Titre</label>
//         <input type="text" name="title" id="" />
//         <br />
//         <label htmlFor="">Description</label>
//         <input type="" name="description" id="" />
//         <br />
//         <input type="submit" value="Add Task" />
//       </form>
//     </>
//   );
// };

// export default Task;

// {
//   /* <ul>
//   {newTask.map((item) => {
//       return <li key={item[0]}> {item[1].username} </li>;
//   })}
//   </ul>

//   <h1>Task Page</h1>
//   <InputLogin
//   handleLogin={handleLogin}
//   dataMail={dataMail}
//   dataPass={dataPass}
//   setDataMail={setDataMail}
//   setDataPass={setDataPass}
//   /> */
// }

// // try {
// //     await push(ref(database, `users/admin/${user.uid}`), {
// //         // Référence vers l'endroit où les données seront stockées
// //         username: dataPass, // Données à stocker : un utilisateur
// //         email: dataMail,
// //     })
// // } catch (error) {
// //     console.log("Erreur lors de l'ajout des données : ", error);
// // }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const Task = () => {
    const [tasks, dispatch] = useReducer(taskControler, []);
  
    // Charger les tâches depuis Firebase
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const snapshot = await get(ref(database, "tasks"));
          if (snapshot.exists()) {
            const data = snapshot.val();
            const loadedTasks = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
  
            // Ajouter les tâches localement
            loadedTasks.forEach((task) =>
              dispatch({ type: "add_task", payload: task })
            );
          }
        } catch (error) {
          console.error("Erreur lors du chargement des tâches :", error.message);
        }
      };
  
      fetchTasks();
    }, []);
  
    // Ajouter une tâche
    const addTaskHandle = async (title, description) => {
      try {
        const newTask = { title, description, completed: false };
  
        // Ajouter dans Firebase
        const taskRef = await push(ref(database, "tasks"), newTask);
  
        // Ajouter localement avec l'ID généré
        dispatch({
          type: "add_task",
          payload: { ...newTask, id: taskRef.key },
        });
      } catch (error) {
        console.error("Erreur lors de l'ajout de la tâche :", error.message);
      }
    };
  
    // Supprimer une tâche
    const removeTaskHandle = async (taskId) => {
      try {
        dispatch({ type: "remove_task", payload: taskId }); // Local
        await update(ref(database, `tasks/${taskId}`), null); // Firebase
      } catch (error) {
        console.error(
          "Erreur lors de la suppression de la tâche :",
          error.message
        );
      }
    };
  
    // Basculer l'état "terminé"
    const toggleTaskHandle = async (taskId) => {
      try {
        const task = tasks.find((t) => t.id === taskId);
        if (task) {
          dispatch({ type: "toggle_task", payload: taskId }); // Local
          await update(ref(database, `tasks/${taskId}`), {
            completed: !task.completed,
          }); // Firebase
        }
      } catch (error) {
        console.error(
          "Erreur lors de la mise à jour de la tâche :",
          error.message
        );
      }
    };
  
    // Gestion du formulaire
    const handleSubmit = (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const description = e.target.description.value;
      addTaskHandle(title, description); // Ajouter la tâche
      e.target.reset(); // Réinitialiser le formulaire
    };
  
    return (
      <>
        <h2>Task Page</h2>
        <form onSubmit={handleSubmit}>
          <label>Titre</label>
          <input type="text" name="title" required />
          <label>Description</label>
          <input type="text" name="description" />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.title}</span> -{" "}
              <span style={{ color: task.completed ? "green" : "red" }}>
                {task.completed ? "Completed" : "Pending"}
              </span>
              <button onClick={() => toggleTaskHandle(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => removeTaskHandle(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default Task;
  