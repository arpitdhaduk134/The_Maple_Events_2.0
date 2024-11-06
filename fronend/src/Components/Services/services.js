import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import img1 from '../../Images/i2.jpg'; // Replace with your image paths
import './services.css'; // Import custom CSS

const Services = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const items = [
        { img: img1, title: 'Birthday Party', text: 'Commitment to excellence in organizing an unforgettable birthday party.' },
        { img: img1, title: 'Corporate Events', text: 'Innovative designs and meticulous attention to detail for corporate events.' },
        { img: img1, title: 'Social Gathering', text: 'Turning your vision into reality for memorable social celebrations.' },
        { img: img1, title: 'Wedding', text: 'An expert team dedicated to making your wedding memorable and stress-free.' }
    ];

    // Function to handle redirection
    const handleRedirect = () => {
        navigate('/book-us'); // Redirect to Book Us page
    };

    return (
        <Container className="allServices">
            <h2 className="services-heading">Exceptional Event Planning Services</h2>
            <p className="services-description">
                Specializing in organizing birthday parties, corporate gatherings, social celebrations, and weddings.
            </p>
        
            <Row>
                {items.map((item, index) => (
                    <Col key={index} md={6} className="mb-4">
                        <div className="service-card">
                            <img src={item.img} alt={item.title} className="services-image" />
                            <div className="service-content">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <button className="arrow-button" onClick={handleRedirect}> {/* Add onClick to trigger redirection */}
                                    <span className="arrow">→</span>
                                </button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Services;
