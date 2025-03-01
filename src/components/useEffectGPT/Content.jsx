import React from 'react';
import { useTheme } from './ThemeContext';

function Content() {
  const { theme } = useTheme();

  return (
    <main
      style={{
        backgroundColor: theme === 'clair' ? '#f9f9f9' : '#222',
        color: theme === 'clair' ? '#000' : '#fff',
        padding: '1rem',
      }}
    >
      <p>Ceci est le contenu principal.</p>
    </main>
  );
}

export default Content;