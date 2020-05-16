import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const NewTask = () => {
  const PROJECT = 'devf-crud';

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(null);
  const [time, setTime] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleTitle = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  }

  const handlePriority = (e) => {
    // console.log(e.target.value);
    setPriority(e.target.value);
  }

  const handleTime = (e) => {
    // console.log(e.target.value);
    setTime(e.target.value);
  }

  const createTask = () => {
    setLoading(true);
    if (priority > 1
      && priority <= 3
      && time > 1
      && time <= 5
      && title.length > 0
      && title.length <= 30) {
      const body = {
        title: title,
        done: false,
        time: time,
        priority: priority
      }
      axios.post(`https://${PROJECT}.firebaseio.com/task.json`, body)
        .then(() => {
          history.push('/');
        })
        .catch(() => {
          setLoading(false);
          setError("Ocurrió un error de conexión");
        });
    } else {
      setLoading(false);
      setError('Verifica que ingresaste información válida');
    }
  };

  return (
    <div className="card">
      <div className="container">
        <h1>Crea una nueva tarea</h1>
        <div className="form-group">
          <label htmlFor="">Ingresa el título de la tarea</label>
          <input onChange={handleTitle} placeholder="No debe de ser mayor a 30 caracteres" value={title} className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="">¿Cuál es la prioridad?</label>
          <input onChange={handlePriority} placeholder="Debe de ser un valor entre 1 y 3" value={priority} className="form-control" type="number" max="3" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="">¿Cuánto tiempo tardarás?</label>
          <input onChange={handleTime} placeholder="Debe de ser un valor entre 1 y 5" value={time} className="form-control" type="number" min="1" />
        </div>
        <div class="text-danger">
          {error}
        </div>
        {loading
          ?
          <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          : <button onClick={() => createTask()} type="submit" className="btn btn-primary">Crear tarea</button>
        }
      </div>
    </div>
  )
}

export default NewTask;
