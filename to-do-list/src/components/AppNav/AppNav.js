import React from 'react';
// NavLink Unicamente para nuestra Nav
import { NavLink } from 'react-router-dom';

const AppNav = () => {
  return (
    // SPA => Single Page App
    <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
      <NavLink className="navbar-brand" activeClassName="disabled" to="/">TO DO LIST</NavLink>
      {/* <a className="navbar-brand" href="/">TO DO LIST</a> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="disabled" to="/add-task">Agregar Tarea</NavLink>
            {/* <a className="nav-link" href="/add-task">Agregar Tarea</a> */}
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="disabled" to="/about">Sobre el proyecto</NavLink>
            {/* <a className="nav-link" href="/about">Sobre el proyecto</a> */}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AppNav;
