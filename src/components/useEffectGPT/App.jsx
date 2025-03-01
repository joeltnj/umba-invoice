

import { useEffect, useState } from 'react';
// import Counter from './components/useEffetGrafikart/Counter';
import Chronometre from './components/useEffectGPT/Chronometre';
import ProductSearch from './components/useEffectGPT/ProductSearch';
import TaskList from './components/useEffectGPT/TaskList';
import Class from './components/useEffectGPT/Class';
import Header from './components/useEffectGPT/Header';
import Content from './components/useEffectGPT/Content';
// import ThemeContext from './components/useEffectGPT/ThemeContext';
// import { createContext } from 'react';
// import TaskList from './components/useEffectGPT/Class ';
import { ThemeProvider } from './components/useEffectGPT/ThemeContext';




const App = () => {





  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );



};

export default App;

