import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/catalog">Catalog Management</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio Management</Link>
        </li>
        <li>
          <Link to="/events">Event Management</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
