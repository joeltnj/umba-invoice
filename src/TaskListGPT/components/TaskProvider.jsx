import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../firebase/firebase";
import { get, ref } from "firebase/database";
import useAuthTaskMethode from "./AuthTaskMethode";
import { useLocation } from "react-router-dom";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const reducerTask = (tasks, action) => {
    if (action.type === "ADD_TASK") {
      return [...tasks, { ...action.payload, completed: false }];
    } else if (action.type === "DELETE_TASK") {
      return tasks.filter(([key]) => {
        // ici [key, value]
        return key !== action.payload;
      });
    } else if (action.type === "TOGGLE_TASK") {
      return tasks.map((task) => {
        return task.id === action.payload ? { ...task, completed: !task.completed } : task;
      });
    } else if (action.type === "SET_TASKS") {
      return action.payload || [];
    } else {
      dispatch({ type: "SET_TASKS", payload: [] }); // Liste vide si aucune tâche
    }
  };

  const [tasks, dispatch] = useReducer(reducerTask, []);
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState(null);
  const { addTaskToDB, removeTaskToDB, toggleTaskToDB } = useAuthTaskMethode();
  // const location = useLocation();

  useEffect(() => {
    // const [userID, setUserID]=useState(null)
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        // dispatch({ type: "SET_TASKS", payload: [] });
        await refreshTasks(); // Charge les tâches pour cet utilisateur
      } else {
        setUserId(null);
        setData([]);
        dispatch({ type: "SET_TASKS", payload: [] });
      }
    });

    return () => unsubscribe(); // Nettoie l'abonnement
  }, [userId]);

  useEffect(() => {
    if (userId) {
      refreshTasks();
    }
  }, [userId]);
  console.log(userId);

  const refreshTasks = async () => {
    if (userId) {
      const snapshot = await get(ref(database, `taskUser/${userId}`));
      if (snapshot.exists()) {
        const taskFromBD = Object.entries(snapshot.val());
        setData(taskFromBD);
        dispatch({ type: "SET_TASKS", payload: taskFromBD });
      } else {
        setData([]);
        // dispatch({ type: "SET_TASKS", payload: [] });
      }
    }
  };

  // const addTask = async (title, description) => {
  //   await addTaskToDB(userId, title, description);
  //   const data = { title, description };
  //   dispatch({ type: "ADD_TASK", payload: data });
  // };

  const addTask = async (title, description) => {
    const newTask = { title, description };
    const taskRef = await addTaskToDB(userId, title, description);

    // Récupérer la clé générée par Firebase
    // const newTaskKey = taskRef.key;

    // dispatch({
    //   type: "ADD_TASK",
    //   payload: { id: newTaskKey, ...newTask },
    // });
  };

  const removeTask = async (taskId) => {
    removeTaskToDB(userId, taskId);
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };
  const toggleTask = async (taskId, currentState) => {
    toggleTaskToDB(userId, taskId, currentState);
    // dispatch({ type: "TOGGLE_TASK", payload: taskId });
  };

  return (
    <>
      <TaskContext.Provider
        value={{ tasks, data, refreshTasks, dispatch, addTask, removeTask, toggleTask }}
      >
        {children}
      </TaskContext.Provider>
    </>
  );
};

export function useTask() {
  return useContext(TaskContext);
}
export default TaskProvider;
