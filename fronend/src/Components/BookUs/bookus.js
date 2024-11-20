import React from 'react';
import ContactForm from '../ContactForm/contactform';
import './bookus.css';
import MapComponent from '../MapComponent/mapComponent';

const BookUs = () => {
  return (
    <div className="bookus-container">
  {/* Contact Form */}
  <ContactForm />

  {/* Contact Info and Map Section */}
  <div className="contact-section">
    {/* Contact Info */}
    <div className="contact-info">
      <h2>Visit Us at Our Convenient Location</h2>
      <p>Discuss your event needs and vision with our expert team.</p>
      <h3>Hub Address</h3>
      <p>47 Peartree Crescent, Guelph, ON N1H 8J2</p>
      <h3>Hours</h3>
      <p>Mon-Sat: 9AM - 9PM</p>
    </div>

    {/* Map Section */}
    <div className="map-container">
      <MapComponent />
      <a
        href="https://www.google.com/maps/place/47+Peartree+Crescent,+Guelph,+ON+N1H+8J2"
        target="_blank"
        rel="noopener noreferrer"
        className="map-button"
      >
        Open in Google Maps
      </a>
    </div>
  </div>
</div>

  );
};

export default BookUs;
