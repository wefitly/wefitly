import React from 'react';
import TrainerTable from './trainerTable.jsx';
//This is just a placeholder for the userdashboard. Signing in/up for a user should redirect them to the trainer table componenet.
const UserDash = (props) => (
  <div>
    <h1>Your Dashboard</h1>
    <TrainerTable />
  </div>
);

export default UserDash;