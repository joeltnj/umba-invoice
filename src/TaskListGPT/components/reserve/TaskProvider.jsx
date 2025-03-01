import { createContext, useContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../firebase/firebase";
import { get, ref } from "firebase/database";
const TaskContext = createContext();

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

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducerTask, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const loadTasks = async () => {
          const snapshot = await get(ref(database, `taskUser/${user.uid}`));
          if (snapshot.exists()) {
            // const taskFromBD = Object.entries(snapshot.val());
            // console.log(taskFromBD);
            // dispatch({ type: "SET_TASKS", payload: taskFromBD });
            const taskFromBD = snapshot.exists() ? Object.entries(snapshot.val()) : [];
            dispatch({ type: "SET_TASKS", payload: taskFromBD });
          }
        };
        loadTasks();
      }
    });
    return () => unsubscribe();
  }, [auth.user, dispatch]);

  return (
    <>
      <TaskContext.Provider value={{ tasks, dispatch }}>{children}</TaskContext.Provider>
    </>
  );
};

export function useTask() {
  return useContext(TaskContext);
}
export default TaskProvider;
