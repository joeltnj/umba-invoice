
import { useEffect, useRef, useState } from "react";
import ThemeProvider from "./components/contextApi/ThemeProvider";
import Enfant from "./components/contextApi/Enfant";


const App = () => {




  return (
    <>
      <p>Context API</p>
      <ThemeProvider >
        <Enfant />

      </ThemeProvider>

     

    </>
  );



};

export default App;

