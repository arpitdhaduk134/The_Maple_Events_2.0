import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li className={location.pathname === '/dashboard' ? 'active' : ''}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className={location.pathname === '/catalog' ? 'active' : ''}>
          <Link to="/catalog">Catalog</Link>
        </li>
        {/* Add more links as necessary */}
      </ul>
    </div>
  );
};

export default Sidebar;
