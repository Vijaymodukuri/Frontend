import React from 'react';
import JobList from './JobList';
import Profile from './Profile';
import Notifications from './Notifications';


const Dashboard = () => {
  return (
    <div className='container-fu'>
      <h1>Student Dashboard</h1>
      <div className="dashboard-container">
        <JobList />
        <Profile />
        <Notifications />
      </div>
    </div>
  );
};

export default Dashboard;