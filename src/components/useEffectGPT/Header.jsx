import React from 'react';
import { useTheme } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: theme === 'clair' ? '#fff' : '#333',
        color: theme === 'clair' ? '#000' : '#fff',
        padding: '1rem',
      }}
    >
      <h1>Thème actuel : {theme}</h1>
      <button onClick={toggleTheme}>Changer le thème</button>
    </header>
  );
}

export default Header;
