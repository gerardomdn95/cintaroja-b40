import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import axios from 'axios';

const TasksCard = () => {

    const [tasks, setTasks] = useState({});
    const PROJECT = '';

    useEffect(() => {
        axios.get(`https://${PROJECT}.firebaseio.com/task.json`)
            .then(({ data }) => setTasks(data));
    }, [])

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Mis Tareas</h5>
                <h6 className="card-subtitle mb-2 text-muted">DEV.F</h6>
                { Object.keys(tasks).map((task) =>
                    <Task title={tasks[task].title} priority={tasks[task].priority} />) }
            </div>
        </div>
    )
}

export default TasksCard;
