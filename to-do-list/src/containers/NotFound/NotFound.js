import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1>404</h1>
            <h2>Not Found</h2>
            <Link className="btn btn-primary" to="/" role="button">Volver a inicio</Link>
        </div>
    )
}

export default NotFound;
