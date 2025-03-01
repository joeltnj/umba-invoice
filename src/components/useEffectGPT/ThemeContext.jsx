import { createContext, useContext, useState } from 'react';

// Créer le contexte
const ThemeContext = createContext();

// Fournisseur du contexte
export function ThemeProvider({ children }) {


  const [theme, setTheme] = useState('clair'); // Thème par défaut

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'clair' ? 'sombre' : 'clair'));
  };



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );


}

// Hook personnalisé pour accéder au contexte
export function useTheme() {
  return useContext(ThemeContext);
}
