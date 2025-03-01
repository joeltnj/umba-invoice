import { useTask } from "./TaskProvider";


const TaskList = () => {

    const { tasks, dispatch } = useTask()

    return (

        <>
            <p>Here is Task List</p>
            {/* <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => dispatch({ type: 'toggle_task', payload: task.id })}
          >
            {task.text}
          </span>
          <button onClick={() => dispatch({ type: 'remove_task', payload: task.id })}>
            Supprimer
          </button>
        </li>
      ))}
    </ul> */}
            <ul>
                {tasks.map((task) => {
                    return (<li key={task.id} >
                        {/* <span onClick={() => { dispatch({ type: 'toggle_task' }) }}> */}
                        {task.text}
                        {/* </span> */}

                        <button type="button"
                            onClick={() => dispatch({ type: 'remove_task', payload: task.id })}>
                            Delete
                        </button>
                        <button type="button"
                            onClick={() => dispatch({ type: 'toggle_task', payload: task.id })}>
                            Toggle
                        </button>
                        <button type="button"
                            onClick={() => dispatch({ type: 'clear_task' })}>
                            Reset
                        </button>
                    </li>
                    )
                }
                )
                }
            </ul>
            {/* {console.log(tasks)} */}


        </>
    )
}

export default TaskList;