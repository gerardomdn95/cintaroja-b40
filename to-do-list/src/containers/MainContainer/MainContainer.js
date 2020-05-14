import React from 'react';
import AppNav from '../../components/AppNav/AppNav';
import TasksCard from '../../components/TasksCard/TasksCard'

const MainContainer = () => {
    return (
        <div>
            <AppNav />
            <div className="container">
            <TasksCard />
            </div>
        </div>
    )
}

export default MainContainer;
