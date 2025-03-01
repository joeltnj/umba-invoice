import { createContext, useContext, useEffect, useReducer, useState } from "react";
// import FirebaseMethode from "./FirebaseMethode";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, database } from "../../../firebase/firebase";
// import { get, ref } from "firebase/database";

const ContextTask = createContext();

const ContextProvider = ({ children }) => {
  // les states
  const [rows, setRows] = useState([{}]);

  return <ContextTask.Provider value={{ rows, setRows }}>{children}</ContextTask.Provider>;
};

// expose useTask
export function useTask() {
  return useContext(ContextTask);
}
export default ContextProvider;
