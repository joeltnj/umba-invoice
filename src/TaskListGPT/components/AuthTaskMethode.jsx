/**
 * Hook useAuthTaskMethode
 *
 * Fournit des méthodes pour gérer les tâches d'un utilisateur dans Firebase :
 * - addTaskToDB : Ajoute une tâche avec un titre et une description.
 * - removeTaskToDB : Supprime une tâche spécifique via son ID.
 * - toggleTaskToDB : Change l'état de complétion d'une tâche.
 *
 * Exemple d'utilisation :
 * const { addTaskToDB, removeTaskToDB, toggleTaskToDB } = useAuthTaskMethode();
 */

import { push, ref, remove, update, get } from "firebase/database";
import { database } from "../../firebase/firebase";

const useAuthTaskMethode = () => {
  // addTask
  const addTaskToDB = async (userId, title, description) => {
    try {
      await push(ref(database, `taskUser/${userId}`), {
        title: title,
        description: description,
        completed: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // removeTask
  const removeTaskToDB = async (userId, taskId) => {
    try {
      await remove(ref(database, `taskUser/${userId}/${taskId}`));
    } catch (error) {
      console.log(error);
    }
  };
  //   toggleTask
  const toggleTaskToDB = async (userId, taskId, currentState) => {
    try {
      await update(ref(database, `taskUser/${userId}/${taskId}`), {
        completed:!currentState ,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return { addTaskToDB, removeTaskToDB, toggleTaskToDB };
};
export default useAuthTaskMethode;
