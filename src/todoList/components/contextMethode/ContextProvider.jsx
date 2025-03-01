import { createContext, useContext, useEffect, useReducer, useState } from "react";
import FirebaseMethode from "./FirebaseMethode";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../../firebase/firebase";
import { get, ref } from "firebase/database";

const ContextTask = createContext();

const reducerTask = (tasks, action) => {
  if (action.type === "ADD_TASK") {
    return [...tasks, { ...action.payload, completed: false }];
  } else if (action.type === "DELETE_TASK") {
    return tasks.filter((task) => {
      task.id !== action.payload;
    });
  } else if (action.type === "TOGGLE_TASK") {
    return tasks.map((task) => {
      return task.id === action.payload ? { ...task, completed: !completed } : task;
    });
  } else if (action.type === "SET_TASKS") {
    return action.payload;
  }
};

const ContextProvider = ({ children }) => {
  // les states
  const [userID, setUserID] = useState(null);
  const [tasks, dispatch] = useReducer(reducerTask, []);
  const { addTaskToDB, deleteTaskToDB, updateTaskToDB, toggleTaskToDB } = FirebaseMethode();

  //  Methode reformate tasks data
  const refreshTasks = async () => {
    if (userID) {
      const snapshot = await get(ref(database, `taskUser/${userID}`));
      if (snapshot.exists()) {
        const taskFromBD = Object.entries(snapshot.val());
        // setData(taskFromBD);
        dispatch({ type: "SET_TASKS", payload: taskFromBD });
      }
    } else {
      // setData([]);
    }
  };

  // connexion et chargement de donnee
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserID(user.uid);
        await refreshTasks();
      } else {
        setUserID(null);
        dispatch({ type: "SET_TASKS", payload: [] });
      }
    });
    return () => unsubscribe();
  }, [userID]);

  // force le chargement apres actualisation (perte de userID)
  useEffect(() => {
    if (userID) {
      refreshTasks();
    }
  }, [userID]);

  // les methodes tasks
  const addTask = async (title, description) => {
    await addTaskToDB(userID, title, description);
  };
  const updateTask = async (taskID, title, description) => {
    await updateTaskToDB(userID, taskID, title, description);
  };
  const deleteTask = async (taskID) => {
    await deleteTaskToDB(userID, taskID);
    console.log('confimeee');
    
  };
  const toggleTask = async (taskID, currentState) => {
    await toggleTaskToDB(userID, taskID, currentState);
  };

  return (
    <ContextTask.Provider
      value={{ tasks, dispatch, addTask, updateTask, deleteTask, toggleTask, refreshTasks }}
    >
      {children}
    </ContextTask.Provider>
  );
};

// expose useTask
export function useTask() {
  return useContext(ContextTask);
}
export default ContextProvider;
