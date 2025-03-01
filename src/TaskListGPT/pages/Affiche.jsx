import { useEffect, useState } from "react";
import { auth, database } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { get, ref } from "firebase/database";

const Affiche = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchTasks = async () => {
          const snapshot = await get(ref(database, `taskUser/${user.uid}`));
          if (snapshot.exists) {
            const taskArray = Object.entries(snapshot.val());
            console.log('"""""""""""data charged"""""""""""""""""""');

            setData(taskArray);
          } else {
            return "no data";
          }
        };
        fetchTasks();
      } else {
        return "no user exist";
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav>
        <ul>
          {data.map(([key, value]) => {
            // console.log(key, value.title);
            return <li key={key}>{value.title}</li>;
          })}
        </ul>
      </nav>
      <h1>Affiche</h1>

      <ul>
        {/* {console.log(data)} */}

        {/* {data.map(([cle, value]) => {
          return (
            <li key={cle}>
              {value.title}
              <span>
                <ActionButton
                  actionName={"Toggle Task"}
                  handleAction={() => dispatch({ type: "TOGGLE_TASK", payload: cle })}
                />
              </span>
              <span>
                <ActionButton
                  actionName={"Delete Task"}
                  handleAction={() => {
                    handleDeleteTask(cle);
                  }}
                />
              </span>
            </li>
          );
        })} */}
      </ul>
      <nav>
        {/* <ActionButton actionName={"Add Task"} handleAction={() => navigate("/AddTaskPAge")} /> */}
      </nav>
    </>
  );
};

export default Affiche;
