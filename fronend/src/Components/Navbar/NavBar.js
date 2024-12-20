import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './navBar.css'; // Import updated styles
import Logo from '../../assets/logo/The Maple Events.jpg'; // Adjust path as per your folder structure

const Navbar = () => {
  const location = useLocation(); // Get the current location

  // Function to check if the current path matches the link's path
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Maple Events Logo" />
        </Link>

        {/* Navbar toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* ms-auto aligns items to the right */}
            <li className="nav-item">
              <Link className={getNavLinkClass('/services')} to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className={getNavLinkClass('/portfolio')} to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={getNavLinkClass('/events')} to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={getNavLinkClass('/budget-calculator')}
                to="/budget-calculator"
              >
                Budget Calculator
              </Link>
            </li>
          </ul>

          {/* "Book Us" Button */}
          <Link to="/book-us">
            <button className="btn custom-button">Book Us</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
