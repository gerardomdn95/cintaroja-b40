import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Importamos nuestros containers
import MainContainer from './containers/MainContainer/MainContainer';
import AddTaskContainer from './containers/AddTaskContainer/AddTaskContainer';
import NotFound from './containers/NotFound/NotFound';
import AppNav from './components/AppNav/AppNav'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/add-task" component={AddTaskContainer} />

        {/* Siempre es el último */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
