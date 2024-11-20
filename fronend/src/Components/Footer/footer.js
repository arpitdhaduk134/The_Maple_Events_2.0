import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <h4>The Maple Events</h4>
          <p>Bringing extra joy to your special day with Maple Events! Your happiness makes our day! 😊</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} The Maple Events. All rights reserved.</p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>
            Email: <a href="mailto:info@themapleevents.com">info@themapleevents.com</a>
          </p>
          <p>Phone: +1 (123) 456-7890</p>
          <button className="subscribe-button">Subscribe to Updates</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
