import React, { useState, useCallback } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]); // Liste des tâches
  const [newTask, setNewTask] = useState(''); // Nouvelle tâche à ajouter
  const [count, setCount] = useState(0); // Compteur indépendant

  // Mémoriser la fonction pour éviter qu'elle soit recréée inutilement
  const addTask = useCallback(() => {
    console.log('addTask recréée !');
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  }, [newTask]); // Dépend uniquement de `newTask`

  return (
    <div>
      <h2>Liste des tâches</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={addTask}>Ajouter</button>
      <button onClick={() => setCount(count + 1)}>Incrémenter ({count})</button>
    </div>
  );
}

export default TaskList;
