// ContactForm.js
import React, { useState } from 'react';
import './contactform.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setError('All fields are required.');
            setSuccessMessage('');
            return;
        }

        setError('');
        setSuccessMessage('Thank you! Your message has been sent.');
        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const handleMapRedirect = () => {
        const address = "47 Peartree Crescent, Guelph, ON N1H 8J2, Canada";
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <div className="contact-form-container">
            <h3>Contact Us</h3>
            <p>Visit us to discuss your event needs and vision with our expert team.</p>

            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>

            <button onClick={handleMapRedirect} className="map-button">
                Find Us on Google Maps
            </button>
        </div>
    );
};

export default ContactForm;
