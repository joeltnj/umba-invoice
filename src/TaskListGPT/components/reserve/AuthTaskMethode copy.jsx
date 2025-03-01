import { push, ref, remove, update, get } from "firebase/database";
import { auth, database } from "../../firebase/firebase";
import { useEffect, useReducer, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useTask } from "./TaskProvider";
// import { useTask } from "./TaskProvider";

const useAuthTaskMethode = () => {
  // const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const { tasks, dispatch } = useTask();
  // let userId = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // addTask
  const addTask = async (title, description) => {
    if (!userId) {
      console.error("User not authenticated");
      return;
    }
    const newTask = { id: userId, title, description };
    try {
      await push(ref(database, `taskUser/${userId}`), {
        title: title,
        description: description,
        completed: false,
      });
      dispatch({ type: "ADD_TASK", payload: newTask });
      // console.log("await saved");
    } catch (error) {
      console.log(error);
      // console.log("no await no saved");
    }
  };

  // removeTask
  const removeTask = async (taskId) => {
    if (!userId) {
      console.error("User not authenticated");
      return;
    }
    try {
      await remove(ref(database, `taskUser/${userId}/${taskId}`));
      dispatch({ type: "DELETE_TASK", payload: taskId });
    } catch (error) {
      console.log(error);
    }
  };

  //   toggleTask
  const toggleTask = async (routes) => {
    try {
      await update(ref(database, routes), {
        completed: action,
      });
    } catch (error) {
      console.log(error);
    }
  };


  //   getTask
  // const getTask = async (routes) => {
  //   try {
  //     const snapshot = await get(ref(database, routes));
  //     if (snapshot.exits()) {
  //       const data = snapshot.val();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return { addTask, removeTask, toggleTask };
};

export default useAuthTaskMethode;
