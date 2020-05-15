import React, { useState } from 'react';
import axios from 'axios';

const Task = ({ title, priority, time, id, done, getTasks }) => {

  const [check, setCheck] = useState(done);
  const PROJECT = '';

  const handleChange = () => {
    const body = {};
    body[id] = {
      done: !check,
      priority: priority,
      time: time,
      title: title
    }
    axios.patch(`https://${PROJECT}.firebaseio.com/task.json`, body)
      .then(() => setCheck(!check))
      .catch(err => console.log(err));
  }

  const deleteNotification = () => {
    axios.delete(`https://${PROJECT}.firebaseio.com/task/${id}.json`)
      .then(() => getTasks())
  }

  return (
    <div className="card">
      <div className="d-flex justify-content-between">
        <h4><span className="badge badge-secondary">{priority}</span>{title}</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id={id}
            checked={check}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor={id}>
            {`${time} horas`}
          </label>
          <button onClick={() => deleteNotification()} type="button" className="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default Task;
