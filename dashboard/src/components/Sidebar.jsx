// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">isUTMx</div>
      <nav>
        <ul>
          <li><a href="#real-time-data">Real Time Data</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#change-password">Change Password</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
