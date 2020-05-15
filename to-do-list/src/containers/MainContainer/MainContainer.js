import React from 'react';
import AppNav from '../../components/AppNav/AppNav';
import TasksCard from '../../components/TasksCard/TasksCard';
import NewTask from '../../components/NewTask/NewTask'

const MainContainer = () => {
    return (
        <div>
            <AppNav />
            <div className="container">
            <TasksCard />
            {/* Formulario */}
            <NewTask />
            </div>
        </div>
    )
}

export default MainContainer;
