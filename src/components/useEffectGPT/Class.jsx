import React, { useState, memo } from 'react';

// Composant enfant qui affiche un élève
const Student = memo(({ name }) => {
  console.log(`Rendu de l'élève : ${name}`);
  return <li>{name}</li>;
});

function Class() {
  const [students] = useState(['Alice', 'Bob', 'Charlie']); // Liste des élèves
  const [count, setCount] = useState(0); // Compteur indépendant

  return (
    <div>
      <h2>Classe</h2>
      <ul>
        {students.map((student, index) => (
          <Student key={index} name={student} />
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>
        Incrémenter le compteur ({count})
      </button>
    </div>
  );
}

export default Class;
