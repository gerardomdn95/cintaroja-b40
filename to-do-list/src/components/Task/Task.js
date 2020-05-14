import React from 'react';

const Task = ( {title, priority} ) => {
    return (
        <div className="card">
            <h4><span className="badge badge-secondary">{priority}</span>{title}</h4>
        </div>
    )
}

export default Task;
