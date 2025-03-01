import React, { useRef, useState } from 'react';

function Chronometre() {
  const timeRef = useRef(0); // Temps suivi en arrière-plan
  const timerRef = useRef(null); // Référence pour le timer
  const [displayTime, setDisplayTime] = useState(0); // Temps affiché uniquement sur clic

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        timeRef.current += 1; // Incrémentation en arrière-plan
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    timeRef.current = 0; // Réinitialisation en arrière-plan
    setDisplayTime(0); // Réinitialisation de l'affichage
  };

  const updateDisplayTime = () => {
    setDisplayTime(timeRef.current); // Met à jour l'affichage avec la valeur de `useRef`
  };

  return (
    <div>
      <h1>Temps affiché : {displayTime} secondes</h1>
      <button onClick={startTimer}>Démarrer</button>
      <button onClick={stopTimer}>Arrêter</button>
      <button onClick={resetTimer}>Réinitialiser</button>
      <br />
      <button onClick={updateDisplayTime}>Voir le temps actuel</button>
    </div>
  );
}

export default Chronometre;
