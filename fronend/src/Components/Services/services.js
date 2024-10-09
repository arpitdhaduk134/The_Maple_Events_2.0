import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img1 from '../../Images/i2.jpg';
import "./services.css"; 


const ImageGrid = () => {
    const items = [
        { img: img1, title: 'Event Planning', text: 'Tailored solutions for every occasion.' },
        { img: img1, title: 'Corporate Events', text: 'Creating professional, memorable experiences.' },
        { img: img1, title: 'Weddings', text: 'Crafting the perfect day with elegance and joy.' },
        { img: img1, title: 'Private Parties', text: 'Bringing your vision to life, from intimate gatherings to grand celebrations.' }
    ];

    return (
        <Container className="py-4">
            <Row>
                {items.map((item, index) => (
                    <Col key={index} md={6} className="mb-4">
                        <Card className="services-cards">
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ImageGrid;
