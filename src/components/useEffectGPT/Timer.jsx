import { useEffect, useRef, useState } from "react";



const Timer = () => {

    const countRef = useRef(0); // Une valeur persistante
  const [renderCount, setRenderCount] = useState(0); // Une valeur liée à l'affichage

  const increment = () => {
    countRef.current += 1; // Augmente la valeur
    console.log("Valeur persistante :", countRef.current); // Affiche la nouvelle valeur
  };

  const reRender = () => {
    setRenderCount((prev) => prev + 1); // Force un re-rendu
  };

  return (
    <div>
      <p>Compteur persistant (pas lié au re-rendu) : {countRef.current}</p>
      <p>Compteur de re-rendus : {renderCount}</p>
      <button onClick={increment}>Incrémenter sans re-rendu</button>
      <button onClick={reRender}>Forcer un re-rendu</button>
    </div>
  );

}

export default Timer;