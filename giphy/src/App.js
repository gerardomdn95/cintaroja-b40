import React from 'react';
import Buscador from './components/Buscador/Buscador'
import './App.css';

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-info">
        <a className="navbar-brand" href="#">GIPHY</a>
      </nav>
      <Buscador />
    </div>
  );
}

export default App;
