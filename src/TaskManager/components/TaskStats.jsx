import React from 'react';
import { useTask } from './TaskProvider';
// import { useTask } from '../TaskContext';

function TaskStats() {
    const { tasks } = useTask();
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
        <div>
            <p>Tâches totales : {totalTasks}</p>
            <p>Tâches terminées : {completedTasks}</p>
            
        </div>
    );
}

export default TaskStats;
