import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import axios from 'axios';

const TasksCard = () => {
  const [tasks, setTasks] = useState({});
  const PROJECT = 'devf-crud';

  const getTasks = () => {
    axios.get(`https://${PROJECT}.firebaseio.com/task.json`)
      .then(({ data }) => setTasks(data));
  }

  // Obtiene task al momento de cargar el componente
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Mis Tareas</h5>
        <h6 className="card-subtitle mb-2 text-muted">DEV.F</h6>
        {Object.keys(tasks).map((id) =>
          <Task
            key={id}
            title={tasks[id].title}
            priority={tasks[id].priority}
            time={tasks[id].time}
            id={id}
            done={tasks[id].done}
            getTasks={getTasks}
          />)}
      </div>
    </div>
  )
}

export default TasksCard;
