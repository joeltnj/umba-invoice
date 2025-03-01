import { push, ref, remove, update } from "firebase/database";
import { database } from "../../../firebase/firebase";

const FirebaseMethode = () => {
  // addTask
  const addTaskToDB = async (userID, title, description) => {
    try {
      await push(ref(database,`taskUser/${userID}`), {
        title: title,
        description: description,
        completed: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // deleteTask
  const deleteTaskToDB = async (userID, taskID) => {
    try {
      await remove(ref(database, `taskUser/${userID}/${taskID}`));
    } catch (error) {
      console.log(error);
    }
  };
  const updateTaskToDB = async (userID, taskID, title, description) => {
    try {
      await update(ref(database, `taskUser/${userID}/${taskID}`), {
        title: title,
        description: description,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // toggleTask
  const toggleTaskToDB = async (userID, taskID, currentState) => {
    try {
      await update(ref(database, `taskUser/${userID}/${taskID}`), {
        completed: !currentState,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return { addTaskToDB, deleteTaskToDB, updateTaskToDB, toggleTaskToDB };
};
export default FirebaseMethode;
