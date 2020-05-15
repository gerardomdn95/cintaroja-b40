import React from 'react';
import axios from 'axios';

const NewTask = () => {
    const PROJECT = '';

    const createTask = () => {
        const body = {
            title: "Limpiar mi cuarto 4",
            done: true,
            time: 1,
            priority: 3
        }
        axios.post(`https://${PROJECT}.firebaseio.com/task.json`, body);
    };

    return (
        <div className="card">
            <div className="container">
                <h1>Crea una nueva tarea</h1>
                <div className="form-group">
                    <label htmlFor="">Ingresa el título de la tarea</label>
                    <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="">¿Cuál es la prioridad?</label>
                    <input className="form-control" type="number" max="3" min="0" />
                </div>
                <div className="form-group">
                    <label htmlFor="">¿Cuánto tiempo tardarás?</label>
                    <input className="form-control" type="number" min="0" />
                </div>
                <button onClick={() => createTask()} type="submit" className="btn btn-primary">Crear tarea</button>
            </div>
        </div>
    )
}

export default NewTask
